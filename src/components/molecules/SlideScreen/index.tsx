import React, { memo, useRef, useState } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";

import { Button, Dot, SlideItem, Text } from "../../../components/atom";
import { COLORS } from "../../../configs";

import { styles } from "./styles";

interface DataProps {
  label: string;
  buttonLabel: string;
  image: any;
  desc: string;
}

interface Props {
  data: DataProps[];
  scrollEnabled: boolean;
  onPress: () => void;
  onPressSkip?: () => void;
}

const Component = ({ data, scrollEnabled, onPress, onPressSkip }: Props) => {
  const scroll = useRef<Animated.ScrollView>(null);
  const { width } = Dimensions.get("window");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);

  const isLast = data.length - 1 === Number(currentIndex.toFixed());

  const _getIndexScroll = (event: any) => {
    const res = event.nativeEvent.contentOffset.x / width;
    setCurrentIndex(res);
  };

  const _nextScreen = () => {
    if (scroll.current) {
      scroll.current.scrollTo({
        x: width * (Number(currentIndex.toFixed()) + 1),
        animated: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      {!isLast && (
        <TouchableOpacity onPress={onPressSkip} style={styles.skipBtn}>
          <Text color={COLORS.blue002}>Lewati</Text>
        </TouchableOpacity>
      )}
      <Animated.ScrollView
        keyboardShouldPersistTaps="always"
        ref={scroll}
        horizontal
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        pagingEnabled
        style={styles.slide}
        scrollEnabled={scrollEnabled}
        onScroll={e => _getIndexScroll(e)}
      >
        {data.map(({ image, desc, label }, index) => (
          <SlideItem
            key={index}
            image={image}
            label={label}
            desc={desc}
            getHeightImage={val => setImgHeight(val)}
          />
        ))}
      </Animated.ScrollView>
      <View style={[styles.wrapDot, { top: imgHeight }]}>
        <View style={styles.dotPage}>
          {data.map((_, index) => (
            <Dot key={index} index={index} currentIndex={currentIndex} />
          ))}
        </View>
      </View>
      <View style={styles.wrapBtn}>
        <Button
          onPress={isLast ? onPress : _nextScreen}
          title={data?.[Number(currentIndex.toFixed())]?.buttonLabel}
        />
      </View>
    </View>
  );
};

Component.defaultProps = {
  scrollEnabled: false,
};

export default memo(Component);

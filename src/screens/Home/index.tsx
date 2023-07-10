import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Button,
  CheckBox,
  DropDownPicker,
  RadioGroup,
  RangeSlider,
  Space,
  Text,
  TextInput,
  Toast,
} from "../../components/atom";
import { KeyboardAvoidingContainer } from "../../components/molecules";
import { View } from "react-native";
import { COLORS } from "../../configs";
import DatePicker from "../../components/atom/DatePicker";

const inputSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Format email invalid")
    .required("Email is required"),
  address: Yup.string().required("Address is required"),
  fruit: Yup.string().required("Fruit is required"),
  hobbies: Yup.array().min(1, "Select at least one option!"),
  gender: Yup.string().required("Gender is required"),
  date: Yup.string().required("Date is required"),
  password: Yup.string().required("Password is required"),
  ktp: Yup.string().required("KTP is required"),
  multi_select: Yup.array().min(1, "Select at least one option!"),
  range: Yup.number().required("Range Required").moreThan(0),
});

// const inputSchema2 = Yup.object().shape({
//   name: Yup.string(),
//   email: Yup.string().email("Format email invalid"),
//   address: Yup.string(),
//   fruit: Yup.string(),
//   hobbies: Yup.array(),
//   gender: Yup.string(),
//   date: Yup.string(),
//   password: Yup.string(),
//   ktp: Yup.string(),
//   multi_select: Yup.array(),
// });

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Melon", value: "melon" },
  { label: "Pir", value: "pir" },
  { label: "Coconut", value: "coconut" },
];

const genderList = [
  {
    id: "1",
    label: "Male",
    value: "1",
  },
  {
    id: "2",
    label: "Female",
    value: "2",
  },
];

const Home = () => {
  const [toast, setToast] = useState(false);

  const handleCheckbox = (
    setFieldValue: any,
    name: string,
    value: string,
    formValues: any[]
  ) => {
    const index = formValues.findIndex(e => e === value);
    if (index < 0) {
      setFieldValue(name, [...formValues, value]);
    } else {
      setFieldValue(
        name,
        formValues.filter(item => item !== value)
      );
    }
  };

  const isChecked = (formValues: any[], value: string) => {
    const index = formValues.findIndex(e => e === value);
    if (index >= 0) {
      return true;
    }
    return false;
  };
  return (
    <KeyboardAvoidingContainer style={{ paddingHorizontal: 20 }}>
      <Text size={24} type="bold">
        Base Input
      </Text>
      <Space height={20} />
      <Formik
        initialValues={{
          name: "",
          email: "",
          address: "",
          fruit: "",
          hobbies: [],
          gender: "",
          date: "",
          password: "",
          ktp: "",
          multi_select: [],
          range: 0,
        }}
        validationSchema={inputSchema}
        onSubmit={() => {
          setToast(true);
        }}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          touched,
          errors,
          setFieldValue,
          resetForm,
        }) => (
          <>
            <TextInput
              placeHolder="Type your name"
              label="Name"
              onChange={handleChange("name")}
              value={values.name}
              errorMessage={touched.name && errors.name && errors.name}
            />
            <Space height={12} />
            <TextInput
              placeHolder="Type your email"
              onChange={handleChange("email")}
              value={values.email}
              label="Email"
              errorMessage={touched.email && errors.email && errors.email}
            />
            <Space height={12} />
            <DropDownPicker
              label="Fruit"
              data={items}
              maxHeight={240}
              placeholder="Select item"
              value={values.fruit}
              onChange={item => setFieldValue("fruit", item.value)}
              errorMessage={touched.fruit && errors.fruit && errors.fruit}
              search
            />
            <Space height={12} />
            <DropDownPicker
              label="Multi Fruit"
              data={items}
              maxHeight={240}
              placeholder="Select item"
              value={values.multi_select}
              onChange={item => setFieldValue("multi_select", item)}
              errorMessage={
                touched.multi_select &&
                errors.multi_select &&
                errors.multi_select
              }
              search
              multiOption
            />
            <Space height={12} />
            <DatePicker
              label="Date"
              onDateChange={(value: any) => setFieldValue("date", value)}
              value={values.date}
              errorMessage={touched.date && errors.date && errors.date}
            />
            <Space height={12} />
            <TextInput
              placeHolder="Type your address"
              onChange={handleChange("address")}
              label="Address"
              value={values.address}
              errorMessage={touched.address && errors.address && errors.address}
              type="textarea"
            />
            <Space height={12} />
            <TextInput
              placeHolder="Type your password"
              onChange={handleChange("password")}
              label="Password"
              value={values.password}
              errorMessage={
                touched.password && errors.password && errors.password
              }
              type="password"
            />
            <Space height={12} />
            <TextInput
              placeHolder="Type your KTP"
              onChange={handleChange("ktp")}
              label="KTP"
              value={values.ktp}
              errorMessage={touched.ktp && errors.ktp && errors.ktp}
              type="number"
            />
            <View style={{ marginTop: 12, marginBottom: 8 }}>
              <Text>Hobbies</Text>
              <Space height={2} />
              <CheckBox
                checked={isChecked(values.hobbies, "read")}
                type="small"
                title="Reading"
                titleSize={14}
                onPress={() =>
                  handleCheckbox(
                    setFieldValue,
                    "hobbies",
                    "read",
                    values.hobbies
                  )
                }
              />
              <Space height={4} />
              <CheckBox
                checked={isChecked(values.hobbies, "travel")}
                type="small"
                title="Traveling"
                titleSize={14}
                onPress={() =>
                  handleCheckbox(
                    setFieldValue,
                    "hobbies",
                    "travel",
                    values.hobbies
                  )
                }
              />
              {errors.hobbies && touched.hobbies && (
                <Text
                  style={{ marginTop: 2 }}
                  size={12}
                  color={COLORS.dangerBase}
                  textAlign="left"
                >
                  {touched.hobbies && errors.hobbies && errors.hobbies}
                </Text>
              )}
            </View>
            <RadioGroup
              label="Gender"
              radioButtons={genderList}
              onPress={handleChange("gender")}
              selectedId={values.gender}
              errorMessage={touched.gender && errors.gender && errors.gender}
            />
            <Space height={12} />
            <RangeSlider
              label="Slider"
              onValueChanged={value => setFieldValue("range", value)}
              value={values.range}
              errorMessage={touched.range && errors.range && errors.range}
            />

            <View style={{ flexDirection: "row" }}>
              <Button
                style={{ marginTop: 20, flex: 1 }}
                onPress={resetForm}
                title="Reset"
              />
              <Space width={8} />
              <Button
                style={{ marginTop: 20, flex: 1 }}
                onPress={handleSubmit}
                title="Submit"
              />
            </View>
          </>
        )}
      </Formik>

      <Space height={24} />
      <Toast
        isVisible={toast}
        onClose={() => setToast(false)}
        closeTimer={3000}
        type="success"
        label="All input validations are correct!"
      />
    </KeyboardAvoidingContainer>
  );
};

export default Home;

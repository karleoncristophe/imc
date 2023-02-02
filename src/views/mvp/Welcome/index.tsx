import React, { useState } from 'react'
import { MVPStackScreenProps } from '../../../@types/navigation'
import { useTheme } from 'styled-components/native'
import { ScrollWrapperView } from '../../../components/ScrollWrapperView'
import { Formik } from 'formik'
import { Button, TextInput, View } from 'react-native'
import { Input } from '../../../components/Input'
import * as Yup from 'yup'
import { TextBase } from '../../../components/TextBase'
import { Space } from '../../../components/Space'

// Menor do que 18,5 Abaixo do peso
//Entre 18,5 e 24,9 Peso normal
//Entre 25 e 29,9 Acima do peso (sobrepeso)
//Entre 30 e 34,9 Obesidade I
//Entre 35 e 39,9 	Obesidade II
//Maior do que 40 Obesidade III

const validation = Yup.object().shape({
  weight: Yup.string()
    .min(1, 'Too Short!')
    .max(3, 'Too Long!')
    .required('Required'),
  height: Yup.string()
    .min(1, 'Too Short!')
    .max(3, 'Too Long!')
    .required('Required'),
})

export const Welcome: React.FC<MVPStackScreenProps<'Welcome'>> = ({
  navigation,
}) => {
  const theme = useTheme()
  const [result, setResult] = useState('')

  const handleCalc = (values: typeof initialValues) => {
    const weight = Number(values.weight)
    const height = Number(values.height) / 100
    const calcHeight = Math.pow(height, 2)
    const calc = weight / calcHeight

    if (calc < 18.5) {
      return setResult('Abaixo do peso')
    }
    if (calc <= 24.9) {
      return setResult('Peso normal')
    }

    if (calc <= 29.9) {
      return setResult('Acima do peso (sobrepeso)')
    }
    if (calc <= 34.9) {
      return setResult('Obesidade I')
    }
    if (calc <= 39.9) {
      return setResult('Obesidade II')
    }
    if (calc >= 40) {
      return setResult('Obesidade III')
    }
  }

  const initialValues = {
    weight: '',
    height: '',
  }

  return (
    <ScrollWrapperView ph={16}>
      <Space h={32} />
      <Formik
        initialValues={initialValues}
        onSubmit={handleCalc}
        validationSchema={validation}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          handleReset,
        }) => (
          <View>
            <Input
              maxLength={3}
              onChangeText={handleChange('weight')}
              onBlur={handleBlur('weight')}
              keyboardType="numeric"
              value={values.weight}
              placeholder="Weight"
            />
            {errors.weight && touched.weight ? (
              <TextBase>{errors.weight}</TextBase>
            ) : null}

            <Space h={10} />

            <Input
              maxLength={3}
              onChangeText={handleChange('height')}
              onBlur={handleBlur('height')}
              keyboardType="numeric"
              value={values.height}
              placeholder="Height"
            />
            {errors.height && touched.height ? (
              <TextBase>{errors.height}</TextBase>
            ) : null}
            <Space h={16} />
            <Button onPress={handleSubmit} title="Submit" />
            <Space h={16} />
            <Button onPress={handleReset} title="Clear" />
            <Space h={16} />
            <TextBase ta="center">{result}</TextBase>
          </View>
        )}
      </Formik>
    </ScrollWrapperView>
  )
}

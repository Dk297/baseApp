// components/InputField.tsx
import React, { useState, forwardRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

type InputFieldProps = {
  label: string;
  error?: string;
  secureToggle?: boolean;
  style?: ViewStyle;
} & TextInputProps;

const InputField = forwardRef<TextInput, InputFieldProps>(
  ({ label, error, secureTextEntry, style, secureToggle, ...rest }, ref) => {
    const [hidden, setHidden] = useState(secureTextEntry ?? false);

    const toggleSecure = () => setHidden(prev => !prev);

    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={[styles.inputWrapper, style]}>
          <TextInput
            ref={ref}
            style={[styles.input, error && styles.inputError]}
            secureTextEntry={secureToggle ? hidden : secureTextEntry}
            {...rest}
          />
          {secureToggle && (
            <TouchableOpacity onPress={toggleSecure} style={styles.eyeButton}>
              <Text>{hidden ? '👁️' : '🙈'}</Text>
            </TouchableOpacity>
          )}
        </View>
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
    );
  },
);

export default InputField;

const styles = StyleSheet.create({
  container: {},
  label: { fontWeight: 'bold', marginBottom: 4 },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
  },
  inputError: {
    borderColor: 'red',
  },
  eyeButton: {
    padding: 8,
  },
  error: {
    color: 'red',
    marginTop: 4,
  },
});

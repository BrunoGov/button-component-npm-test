import { TouchableOpacityProps } from 'react-native';

import { Container, Text } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

/**
 *  Componente de botão.
 *  - `text`: Texto principal do botão
 */
export default function Button({ text, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <Text>
        {text}
      </Text>
    </Container>
  );
}

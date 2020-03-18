import Text from "../components/Text";
import Button from "../components/Button";
import HStack from "../components/HStack";
import VStack from "../components/VStack";

export default function Index() {
  return (
    <HStack align="flex-end">
      <VStack align="center">
        <HStack align="center">
          <Text>Wojciech Czerski</Text>
        </HStack>
        <HStack>
          <Button
            name="GitHub"
            image="/images/github-64.png"
            url="https://github.com/wojciechczerski"
          />
          <Button
            name="LinkedIn"
            image="/images/linkedin-64.png"
            url="https://www.linkedin.com/in/wojciechczerski/"
          />
          <Button
            name="E-Mail"
            image="/images/mail-64.png"
            url="mailto:contact@wojciechczerski.com"
          />
        </HStack>
      </VStack>
      <style jsx global>{`
        html {
          color: white;
          background-color: #00252d;
          font-size: 1em;
          font-family: Arial, Helvetica, sans-serif;
          line-height: 1.4;
        }
      `}</style>
    </HStack>
  );
}

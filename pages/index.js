import Text from "../components/Text";
import Button from "../components/Button";
import HStack from "../components/HStack";
import VStack from "../components/VStack";
import Project from "../components/Project";
import Spacer from "../components/Spacer";
import projects from "../contents/projects";
import spacing from "../theme/spacing";

export default function Index() {
  return (
    <div>
      <VStack>
        <HStack justify="flex-end">
          <VStack justify="center">
            <HStack justify="center">
              <Text>Wojciech Czerski</Text>
            </HStack>
            <HStack justify="center">
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
          <Spacer width={spacing.medium} />
        </HStack>
        <VStack align="center">
          {projects.map(project => (
            <Project
              key={project.title}
              title={project.title}
              desc={project.desc}
              images={project.images}
              buttons={project.buttons}
            />
          ))}
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
      </VStack>
    </div>
  );
}

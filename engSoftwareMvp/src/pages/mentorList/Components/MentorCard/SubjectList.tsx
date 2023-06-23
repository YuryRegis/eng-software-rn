import React from "react";
import { ScrollView, HStack, Box } from "native-base";
import { Typography } from "../../../../components";

export interface ISubjectListProps {
  subjects?: string[];
}

function SubjectList({ subjects }: ISubjectListProps) {
  return (
    <ScrollView my={2} horizontal showsHorizontalScrollIndicator={false}>
      <HStack overflow="hidden" flex={1} space={2}>
        {subjects.map((subject) => (
          <Box p={2} rounded={8} bg="gray.200" key={subject}>
            <Typography.RobotoRegular color="primary.700" fontSize="sm">
              {subject}
            </Typography.RobotoRegular>
          </Box>
        ))}
      </HStack>
    </ScrollView>
  );
}

export default SubjectList;

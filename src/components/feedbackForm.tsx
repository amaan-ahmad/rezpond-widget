import React, { useState } from "react";
import { Textarea, Text, Button, Stack } from "@chakra-ui/react"
import { isDev } from "../utils/env";

const FeedbackForm: React.FC<{ clientId: string }> = ({ clientId }) => {
    const dev = isDev();
    const [value, setValue] = useState<string>('');

    return (
        <>
            <Stack p={2} dir="column" spacing={1}>
                {dev && <Text mb='8px'>Client ID: {clientId}</Text>}
                <Textarea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    borderRadius="5px"
                    placeholder='Let us know how can we improve'
                    size='md'
                />

                <Button colorScheme='blue'>Submit</Button>
            </Stack>
        </>)
}

export default FeedbackForm;
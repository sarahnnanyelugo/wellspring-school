import { Button, ButtonGroup } from "@chakra-ui/react";
import "./_app-button.scss";
export const AppButton =(props)=>{
    return (
      <utton colorScheme="blue" size="lg">
        {props.text}
      </utton>
    );
}
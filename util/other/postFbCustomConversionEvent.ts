import { v4 as uuidv4 } from "uuid";

interface PostFbCustomConversionEventProps {
  eventname: string;
}

export const postFbCustomConversionEvent = (
  props: PostFbCustomConversionEventProps
) => {
  const { eventname } = props;
  fbq("trackCustom", eventname, { eventID: uuidv4() });
};

import { v4 as uuidv4 } from "uuid";

interface PostGtagCustomConversionEventProps {
  eventId: string;
}

export const postGtagCustomConversion = (
  props: PostGtagCustomConversionEventProps
) => {
  const { eventId } = props;
  gtag("event", "conversion", { send_to: eventId, transaction_id: uuidv4() });
};

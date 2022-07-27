import { Recommendations } from "../integrations/recommomendations";
import { SpeechToText } from "../integrations/speechToText";

export default ({ app: { $axios } }, inject) => {
  const recommomendations = new Recommendations($axios);
  const speechToText = new SpeechToText($axios);
  inject('recommendationsIntegration', recommomendations);
  inject('speechToTextIntegration', speechToText);
}
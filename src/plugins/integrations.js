import { Recommendations } from "../integrations/recommomendations";
import { SpeechToText } from "../integrations/speechToText";
import { Search } from "../integrations/search";

export default ({ app: { $axios } }, inject) => {

  $axios.setHeader('accept', 'application/json');
  $axios.setHeader('Content-Type', 'application/json');
  const recommomendations = new Recommendations($axios);
  const speechToText = new SpeechToText($axios);
  const search = new Search($axios);

  inject('recommendationsIntegration', recommomendations);
  inject('speechToTextIntegration', speechToText);
  inject('searchIntegration', search);
}
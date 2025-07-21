import { inputLimit } from "./characterLimit.js";
import { updateLetterDensity } from "./densityGraph.js";
import { handleSpaceExclusion } from "./excludeSpaces.js";
import { sentenceCount } from "./sentenceCount.js";
import { toggleTheme } from "./toggleTheme.js";
import { updateTotal } from "./totalCounter.js";
import { countWords } from "./wordCount.js";

toggleTheme();
updateTotal()
countWords();
sentenceCount();
inputLimit();
handleSpaceExclusion();
updateLetterDensity();

import alt from 'scripts/alt';

import thiefStory from 'data/stories/thief';

import StoryActions from 'scripts/modules/story/actions/story-actions';

export default alt.createStore(class {
  constructor() {
    this.progressIndex = 1;

    this.bindListeners({handleStep: StoryActions.STEP});

    this.exportPublicMethods({getEntries: this.getEntries});
  }

  handleStep() {
    this.progressIndex++;
  }

  getEntries() {
    return thiefStory.slice(0, this.getState().progressIndex)
  }
});

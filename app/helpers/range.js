import Ember from 'ember';

export function range(params) {
  const [start, end] = params;
  let range = [];

  for(let i = start; i <= end; i++){
    range.push(i);
  }

  return range;
}

export default Ember.Helper.helper(range);

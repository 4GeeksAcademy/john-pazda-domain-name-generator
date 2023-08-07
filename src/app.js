let pronouns = ['my', 'our', 'the', 'your'];
let adjectives = ['new', 'big', 'old', 'large'];
let nouns = ['website', 'article', 'person', 'blog'];
let tlds = ['.com', '.org', '.gov', '.wiki'];

let domainNames = '';

for (let pronoun of pronouns) {
   for (let adjective of adjectives) {
    for (let noun of nouns) {
      for (let tld of tlds) {
        // eslint-disable-next-line no-console
        console.log(pronoun + adjective + noun + tld);
      }
    }
   }
// eslint-disable-next-line no-extra-semi
};
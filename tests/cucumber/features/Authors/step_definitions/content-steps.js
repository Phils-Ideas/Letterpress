module.exports = function () {

  this.Given(/^I have created a landing page with the following header markdown$/, function (markdown, callback) {
    this.server.call(
      'fixtures/page/create', {
        template: 'landing-page',
        path: '/',
        content: markdown
      }).then(callback);
  });

  this.When(/^a user navigates to the landing page$/, function () {
    return this.client.getText('header h1').should.become('My Content');
  });

  this.Then(/^they see the heading "([^"]*)"$/, function (heading) {
    return this.client.getText('header h1').should.become(heading);
  });

  this.Then(/^they see the cover image from "([^"]*)"$/, function (source) {
    return this.client.
      getAttribute('header img', 'src').should.eventually.contain(source);
  });

  this.Then(/^they see the tag-line "([^"]*)"$/, function (tagline) {
    return this.client.
      getText('header p em').should.become(tagline);
  });

  this.Then(/^they can navigate to "([^"]*)" at "([^"]*)"$/, function (location, source) {
    return this.client.
      getAttribute('a[title="' + location + '"]', 'href').should.eventually.contain(source);
  });

  this.Given(/^I have created a chapter called "([^"]*)" with the description$/, function (title, text) {
    return this.server.call(
      'fixtures/page/create', {
        template: 'chapter',
        title: title,
        content: text
      });
  });

  this.Then(/^they see the chapter "([^"]*)" in the table of contents with the description$/, function (title, text) {
    return this.client.
      isExisting('//*[@class="chapter"]//a[contains(text(), "' + title + '")]').should.become(true).
      isExisting('//*[@class="chapter"]//p[contains(text(), "' + text + '")]').should.become(true);
  });

};

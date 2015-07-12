@ignore
Feature: View a video page

  As a user
  I want to view a page with a video
  So that I can visually learn

  Background: Author created a page
    Given An author has created a video page with the following header markdown
      """
      #File Structure

      <iframe src="//fast.wistia.net/embed/iframe/521uo49pqd" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="400"></iframe><script src="//fast.wistia.net/assets/external/E-v1.js" async></script>

      Bacon ipsum dolor amet do jerky chuck reprehenderit pork chop tempor ball tip proident tail velit pariatur jowl. Labore hamburger nisi, andouille meatball aute ribeyeleberkas cupidatat. Dolore pastrami ball tip tenderloin ullamco nisi elit voluptate. Doner venison nulla in excepteur alcatra magna ground round turkey veniam ullamco tri-tip in meatball. Landjaeger voluptate commodo minim, pariatur pig kielbasa biltong nulla sint beef cillum.
      """

  Scenario: authenticated user can view a video page
    Given I have authenticated
    When I navigate to the video page
    Then I can see the heading of this video
    And I read the video description
    And I can watch the authored video
    And I can join the discussion about this video

  Scenario: unregistered users can purchase a subscription
    Given I have have not registered
    When I navigate to the video page
    Then I can see the heading of this video
    And I read the video description
    And I see a "buy" button
    And I cannot not see a video
    And I cannot join the discussion about this video
    
  Scenario: registered users can login to see private content
    Given I have have registered
    And I am not logged in
    When I login
    Then I can see my private content
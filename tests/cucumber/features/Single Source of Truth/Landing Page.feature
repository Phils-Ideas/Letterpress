Feature: Landing Page for the Source of Truth
  The landing page has a way to login and shows some teaser content
  @dev
  Scenario: Author the header with markdown
    Given I have created a landing page with the following header markdown
          """
          #My Content

          ![Cover](/cover.jpg "Cover")

          *Learn how to do everything*

          [Preview](/preview "Preview Chapter") [Buy](/buy "Buy Content")
          """
    When  a user navigates to the landing page
    Then  they see the heading "My Content"
    And   they see the cover image from "/cover.jpg"

Feature: Tag a canvas item
  Tagging the items in the canvas enables the signalling back to the item.
  This feature addresses the issue of relating the canvas item to a set of features and signal sources.
  
  @silos @dev
  Scenario: Add a new canvas item
    Given I have signed up
    And I have logged in
    When I add a new canvas item
    And I fill out the tag field with "@canvas-item-tag"
    Then the new item will have a tag "@canvas-item-tag"
Feature: Complete Cubera Flow

Scenario: Scroll homepage, click About Us and navigate sections
    Given User opens Cubera homepage
    When User scrolls through all sections
    And User clicks About Us button
    And User navigates About Us sections
    Then Target section should be visible
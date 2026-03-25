   @cube
    Feature: Cube Page Flow

    Scenario: Open Cube page and validate section
        Given User opens Cubera homepage
        When User clicks Cube menu
        Then Cube page should be visible
        When User clicks cube section
        Then Cube result section should be visible
        When User navigates deep cube sections
        When User interacts with bb section
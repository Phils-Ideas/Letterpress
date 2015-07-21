@dev
Feature: Create account

	Scenario: Receive link after payment
		Given I just paid for content and received an enrollment email
		When I open the account creation link in my email
		Then I am able to create my account
		#Then I am able to access my content

	Scenario: Login after enrollment
		Given I have already created an account
#		When I login with my username and password
#		Then I am able to access my content

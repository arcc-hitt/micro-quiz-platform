describe('Micro-Quiz Flow', () => {
  it('lets a user take a quiz and see their score', () => {
    cy.visit('/');

    // Home page loads categories
    cy.contains('History').click();

    // Category page
    cy.url().should('include', '/quizzes/History');
    cy.contains('Ancient Civilizations').click();

    // Quiz page
    cy.url().should('include', '/quiz/history1');
    cy.contains('Which river was central to Ancient Egypt?');

    // Answer all questions until Finish appears
    function answerQuestion() {
      cy.get('input[type="radio"]').first().check();
      cy.contains('Submit').click();
      cy.contains(/✅ Correct!|❌ Incorrect./);
    }

    answerQuestion();

    function nextOrFinish() {
      cy.get('body').then($body => {
        if ($body.find('button:contains("Next")').length) {
          cy.contains('Next').click();
          answerQuestion();
          nextOrFinish();
        } else {
          cy.contains('Finish').should('be.enabled').click();
          cy.contains(/You scored/);
        }
      });
    }

    nextOrFinish();
  });
});

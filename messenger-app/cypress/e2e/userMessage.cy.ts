import Message from '../../src/app/model/Message';

describe('User Message Component', () => {
  it('navigates to server of Delete button click', () => {
    let fakeMessage: Message = {
      sender: { firstName: 'Ludovic', isOnline: false },
      text: 'Message from Ludovic',
      conversationId: 1,
      sequenceNumber: 0,
    };
    cy.visit('http://localhost:4200');
    cy.intercept(
      {
        method: 'DELETE',
        url: 'http://localhost:8080/api/delete-user-message',
      },
      (req) => {
        req.reply([fakeMessage]);
      }
    );
    cy.contains('Delete').click();
    cy.contains(fakeMessage.text);
  });
});

// import * as IntroductionAction from '../../app/action/IntroductionAction';

// describe('AuthenticationActionCreator', () => {
// 	describe('when asked to Login', () => {
// 		it('invokes the authentication service to login with the right arguments and dispatches the response on success', 
// 		async () => {
// 			// Arrange
// 			const mockDispatch = jest.fn();
			
// 			await IntroductionAction.completedOnboarding();

// 			expect(mockDispatch.mock.calls[0]).toEqual(
// 				[
// 					{
// 						type: 'LOGGING_IN',
// 						user: null,
// 						error: null
// 					}
// 				]
// 			);
// 			expect(mockDispatch.mock.calls[1]).toEqual(
// 				[
// 					{
// 						type: 'LOGGED_IN_SUCCESSFULLY',
// 						user: expectedUser,
// 						error: null
// 					}
// 				]
// 			)
// 			expect(mockDispatch).toHaveBeenCalledTimes(1);
// 		});

// 		it('dispatches a LOG_IN_UNSUCCESSFUL action when the authentication service throws an error', 
// 		async () => {
// 			// Arrange
// 			const mockDispatch = jest.fn();

// 			const expected_error = new Error('401: Unauthorised');
// 			const mockAuthenticationService:IAuthenticationService = {
// 				Login: jest.fn(
// 					async (): Promise<IUser> =>
// 					{
// 						throw expected_error;
// 					}
// 				)
// 			};

// 			let authActionCreator = new AuthenticationActionCreator(mockAuthenticationService);

// 			// Act
// 			await authActionCreator.Login('', '')(mockDispatch);

// 			// Assert
// 			expect(mockDispatch.mock.calls[0]).toEqual(
// 				[
// 					{
// 						type: 'LOGGING_IN',
// 						user: null,
// 						error: null						
// 					}
// 				]
// 			);
// 			expect(mockAuthenticationService.Login).toHaveBeenCalledWith('', '');
// 			expect(mockDispatch.mock.calls[1]).toEqual(
// 				[
// 					{
// 						type: 'LOG_IN_UNSUCCESSFUL',
// 						user: null,
// 						error: expected_error
// 					}
// 				]
// 			)
// 			expect(mockDispatch).toHaveBeenCalledTimes(2);
// 		});
// 	});
// });

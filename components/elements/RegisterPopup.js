import Link from "next/link"

export default function RegisterPopup({ isRegister, handleRegister, handleLogin }) {
	return (
		<>
			<div className={`modal fade modalCenter ${isRegister ? "show" : ""}`} id="modalregister" style={{ display: isRegister ? "block" : "none" }}>
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content modal-sm">
						<a className="btn-hide-modal" onClick={handleRegister}><i className="icon-close" /></a>
						<div className="image-left">
							<img src="/images/section/login.jpg" alt="" />
							<h3>Welcome to Your Real Estate Website</h3>
						</div>
						<div className="content-right">
							<h4>Create an account</h4>
							<form className="form-login">
								<fieldset className="name">
									<input type="text" placeholder="Username" className name="text" tabIndex={2} aria-required="true" required />
								</fieldset>
								<fieldset className="email">
									<input type="email" placeholder="Email" className name="email" tabIndex={2} aria-required="true" required />
								</fieldset>
								<fieldset className="password">
									<input type="password" placeholder="Password" className name="password" tabIndex={2} aria-required="true" required />
								</fieldset>
								<fieldset className="password">
									<input type="password" placeholder="Retype Password" className name="password" tabIndex={2} aria-required="true" required />
								</fieldset>
								<div className="flex items-center justify-between">
									<div className="checkbox-item">
										<label>
											<p>I agree with terms &amp; conditions</p>
											<input type="checkbox" />
											<span className="btn-checkbox" />
										</label>
									</div>
								</div>
								<div className="button-submit">
									<button className="tf-button-primary w-full" type="submit">Register<i className="icon-arrow-right-add" /></button>
								</div>
							</form>
							<div className="flex items-center justify-center">
								<p>Have an account?</p>
								<a className="btn-show-register"  onClick={() => { handleRegister(); handleLogin();}}>Log in</a>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}

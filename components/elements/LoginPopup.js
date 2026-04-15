import { Link } from '@/i18n/navigation'

export default function LoginPopup({ isLogin, handleRegister, handleLogin }) {
	return (
		<>
			<div className={`modal fade modalCenter ${isLogin ? "show" : ""}`} id="modallogin" style={{ display: isLogin ? "block" : "none" }}>
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content modal-sm">
						<a onClick={handleLogin} className="btn-hide-modal" data-bs-dismiss="modal"><i className="icon-close" /></a>
						<div className="image-left">
							<img src="/images/section/login.jpg" alt="" />
							<h3>Welcome to Your Real Estate Website</h3>
						</div>
						<div className="content-right">
							<h4>Sign into your account</h4>
							<form className="form-login">
								<fieldset className="name">
									<input type="text" placeholder="Username" name="text" tabIndex={2} defaultValue="creative" aria-required="true" required />
								</fieldset>
								<fieldset className="password">
									<input type="password" placeholder="Password" name="password" tabIndex={2} aria-required="true" required />
								</fieldset>
								<div className="flex items-center justify-between w-full">
									<div className="checkbox-item">
										<label>
											<p>Remember me</p>
											<input type="checkbox" />
											<span className="btn-checkbox" />
										</label>
									</div>
									<Link href="/#" className="lost-password">Lost your password?</Link>
								</div>
								<div className="button-submit w-full">
									<button className="tf-button-primary w-full" type="submit">Login<i className="icon-arrow-right-add" /></button>
								</div>
							</form>
							<div className="flex items-center justify-center">
								<p>Not a member?</p>
								<a className="btn-show-register" onClick={() => { handleRegister(); handleLogin();}}>Register here</a>
							</div>
							<ul className="wg-social-1">
								<li><Link href="/#"><i className="flaticon-google" /></Link></li>
								<li><Link href="/#"><i className="flaticon-twitter" /></Link></li>
								<li><Link href="/#"><i className="flaticon-facebook" /></Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			{isLogin && <div className="modal-backdrop fade show" onClick={handleLogin}  style={{ display:"block" }}/>
			}
		</>
	)
}

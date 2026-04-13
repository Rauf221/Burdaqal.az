
import LayoutAdmin from "@/components/layout/LayoutAdmin"
export default function DashboardMyProfile() {

	return (
		<>

			<LayoutAdmin breadcrumbTitle="My Profiles">
				<div>
					<div className="wg-box pl-44 mb-20">
						<h4>Profile Information</h4>
						<div className="my-profiles-wrap">
							<div className="avatar-image">
								<div className="left">
									<img src="/images/author/author-4.png" alt="" />
									<div className="icon">
										<i className="flaticon-delete" />
									</div>
								</div>
								<div className="right">
									<label className="uploadfile">
										<input type="file" className name="file" />
										<div className="tf-button-primary style-bg-white">Upload Images<i className="flaticon-upload-1" /></div>
										<p className="file-name">Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg &amp; .png</p><p>
										</p></label></div>
							</div>
							<form className="form-profiles flex gap30 flex-column">
								<div className="cols">
									<fieldset className="name has-top-title">
										<input type="text" placeholder="Username" className name="text" tabIndex={2} aria-required="true" required />
										<label htmlFor>Username</label>
									</fieldset>
									<fieldset className="email has-top-title">
										<input type="email" placeholder="Email" className name="email" tabIndex={2} defaultValue="themesflat@gmail.com" aria-required="true" required />
										<label htmlFor>Email</label>
									</fieldset>
								</div>
								<fieldset className="description has-top-title">
									<textarea name="description" rows={4} placeholder="Description" className tabIndex={2} aria-required="true" required defaultValue={"Lorem Ipsum Dolar Sit Amet"} />
									<label htmlFor>Description</label>
								</fieldset>
								<div className="cols">
									<fieldset className="text has-top-title">
										<input type="text" placeholder="Job" className name="text" tabIndex={2} aria-required="true" required />
										<label htmlFor>Job</label>
									</fieldset>
									<fieldset className="text has-top-title">
										<input type="text" placeholder="Web" className name="text" tabIndex={2} aria-required="true" required />
										<label htmlFor>Web</label>
									</fieldset>
								</div>
								<div className="cols">
									<fieldset className="phone has-top-title">
										<input type="number" placeholder="Phone" className name="number" tabIndex={2} aria-required="true" required />
										<label htmlFor>Phone</label>
									</fieldset>
									<fieldset className="fax has-top-title">
										<input type="number" placeholder="Fax" className name="number" tabIndex={2} aria-required="true" required />
										<label htmlFor>Fax</label>
									</fieldset>
								</div>
								<select className="nice-select" tabIndex={0}>
									<option data-value className="option selected">USA</option>
									<option data-value="For Ren" className="option">Viet Nam</option>
									<option data-value="Sold" className="option">China</option>
								</select>
								<div className="cols">
									<fieldset className="text has-top-title">
										<input type="text" placeholder="Friendly Address" className name="text" tabIndex={2} aria-required="true" required />
										<label htmlFor>Friendly Address</label>
									</fieldset>
									<fieldset className="text has-top-title">
										<input type="text" placeholder="Map Location" className name="text" tabIndex={2} aria-required="true" required />
										<label htmlFor>Map Location</label>
									</fieldset>
								</div>
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={400} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
								<div className="cols small">
									<fieldset className="number has-top-title">
										<input type="number" placeholder="X" className name="number" tabIndex={2} defaultValue="25.783260" aria-required="true" required />
										<label htmlFor>X</label>
									</fieldset>
									<fieldset className="number has-top-title">
										<input type="number" placeholder="Y" className name="number" tabIndex={2} defaultValue="-80.230863" aria-required="true" required />
										<label htmlFor>Y</label>
									</fieldset>
								</div>
								<div className="button-submit mt-10">
									<button className="tf-button-primary" type="submit">Save Profile<i className="icon-arrow-right-add" /></button>
								</div>
							</form>
						</div>
					</div>
					<div className="wg-box pl-44 mb-20">
						<h4>Social Media</h4>
						<div className="my-social-media">
							<form className="form-social-media flex gap30 flex-column">
								<div className="cols">
									<fieldset className="text has-top-title">
										<input type="text" placeholder="Facebook Url" className name="text" tabIndex={2} aria-required="true" required />
										<label htmlFor>Facebook Url</label>
									</fieldset>
									<fieldset className="text has-top-title">
										<input type="text" placeholder="Twitter Url" className name="text" tabIndex={2} aria-required="true" required />
										<label htmlFor>Twitter Url</label>
									</fieldset>
								</div>
								<div className="cols">
									<fieldset className="text has-top-title">
										<input type="text" placeholder="Instagram Url" className name="text" tabIndex={2} aria-required="true" required />
										<label htmlFor>Instagram Url</label>
									</fieldset>
									<fieldset className="text has-top-title">
										<input type="text" placeholder="Linkedin Url" className name="text" tabIndex={2} aria-required="true" required />
										<label htmlFor>Linkedin Url</label>
									</fieldset>
								</div>
								<div className="button-submit mt-10">
									<button className="tf-button-primary" type="submit">Update Social<i className="icon-arrow-right-add" /></button>
								</div>
							</form>
						</div>
					</div>
					<div className="wg-box pl-44">
						<h4>Change password</h4>
						<div className="my-change-password">
							<form className="form-change-password flex gap30 flex-column">
								<fieldset className="password has-top-title">
									<input className type="password" placeholder="Old Password" name="password" tabIndex={0} aria-required="true" required />
									<label htmlFor>Old Password</label>
								</fieldset>
								<div className="cols">
									<fieldset className="password has-top-title">
										<input className type="password" placeholder="New Password" name="password" tabIndex={0} aria-required="true" required />
										<label htmlFor>New Password</label>
									</fieldset>
									<fieldset className="password has-top-title">
										<input className type="password" placeholder="Confirm New Password" name="password" tabIndex={0} aria-required="true" required />
										<label htmlFor>Confirm New Password</label>
									</fieldset>
								</div>
								<div className="button-submit mt-10">
									<button className="tf-button-primary" type="submit">Change Password<i className="icon-arrow-right-add" /></button>
								</div>
							</form>
						</div>
					</div>
				</div>

			</LayoutAdmin>
		</>
	)
}
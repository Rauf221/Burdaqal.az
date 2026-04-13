
import LayoutAdmin from "@/components/layout/LayoutAdmin"
export default function DashboardAddProperties() {

	return (
		<>

			<LayoutAdmin breadcrumbTitle="Add New Property">
				<div>
					<div className="wg-box pl-44 mb-20">
						<h4>Bacsic Infomation</h4>
						<form className="form-bacsic-infomation flex gap30 flex-column">
							<fieldset className="text has-top-title">
								<input type="text" placeholder="Property Title *" className name="text" tabIndex={2} aria-required="true" required />
								<label htmlFor>Property Title *</label>
							</fieldset>
							<select className="nice-select" tabIndex={0}>

								<option data-value className="option selected">List</option>
								<option data-value="For Ren" className="option">Grid</option>
								<option data-value="Sold" className="option">Single</option>

							</select>
							<fieldset className="description has-top-title">
								<textarea name="description" rows={4} placeholder="Property Description" className tabIndex={2} aria-required="true" required defaultValue={"Lorem Ipsum Dolar Sit Amet"} />
								<label htmlFor>Property Description</label>
							</fieldset>
							<div className="button-submit mt-10">
								<button className="tf-button-primary" type="submit">Save &amp; Preview<i className="icon-arrow-right-add" /></button>
							</div>
						</form>
					</div>
					<div className="wg-box pl-44 mb-20">
						<h4>Additional</h4>
						<form className="form-additional flex gap30 flex-column">
							<div className="cols cols-two">
								<fieldset className="text">
									<input type="text" placeholder="Property ID" className name="text" tabIndex={2} aria-required="true" required />
								</fieldset>
								<select className="nice-select" tabIndex={0}>

									<option data-value className="option selected">List</option>
									<option data-value="For Ren" className="option">Grid</option>
									<option data-value="Sold" className="option">Single</option>

								</select>
							</div>
							<div className="cols cols-two">
								<select className="nice-select" tabIndex={0}>

									<option data-value className="option selected">List</option>
									<option data-value="For Ren" className="option">Grid</option>
									<option data-value="Sold" className="option">Single</option>

								</select>
								<fieldset className="text">
									<input type="text" placeholder="Label" className name="text" tabIndex={2} aria-required="true" required />
								</fieldset>
							</div>
							<div className="cols cols-two">
								<fieldset className="text">
									<input type="text" placeholder="Material" className name="text" tabIndex={2} aria-required="true" required />
								</fieldset>
								<select className="nice-select" tabIndex={0}>

									<option data-value className="option selected">1</option>
									<option data-value="For Ren" className="option">2</option>
									<option data-value="Sold" className="option">3</option>

								</select>
							</div>
							<div className="cols cols-two">
								<select className="nice-select" tabIndex={0}>

									<option data-value className="option selected">1</option>
									<option data-value="For Ren" className="option">2</option>
									<option data-value="Sold" className="option">3</option>

								</select>
								<select className="nice-select" tabIndex={0}>

									<option data-value className="option selected">1</option>
									<option data-value="For Ren" className="option">2</option>
									<option data-value="Sold" className="option">3</option>

								</select>
							</div >
							<div className="cols cols-two">
								<select className="nice-select" tabIndex={0}>

									<option data-value className="option selected">1</option>
									<option data-value="For Ren" className="option">2</option>
									<option data-value="Sold" className="option">3</option>

								</select>
								<select className="nice-select" tabIndex={0}>

									<option data-value className="option selected">1</option>
									<option data-value="For Ren" className="option">2</option>
									<option data-value="Sold" className="option">3</option>

								</select>
							</div >
							<div className="cols cols-two">
								<fieldset className="text">
									<input type="text" placeholder="Home area (sqft)" className name="text" tabIndex={2} aria-required="true" required />
								</fieldset>
								<fieldset className="text">
									<input type="text" placeholder="Lot dimensions" className name="text" tabIndex={2} aria-required="true" required />
								</fieldset>
							</div>
							<div className="cols cols-two">
								<fieldset className="text">
									<input type="text" placeholder="Lot area (sqft)" className name="text" tabIndex={2} aria-required="true" required />
								</fieldset>
								<div />
							</div>
							<div className="button-submit mt-10">
								<button className="tf-button-primary" type="submit">Save &amp; Preview<i className="icon-arrow-right-add" /></button>
							</div>
						</form >
					</div >
					<div className="wg-box pl-44 mb-20">
						<h4>Select Energy Class</h4>
						<form className="form-energy flex gap30 flex-column">
							<div className="cols">
								<select className="nice-select" tabIndex={0}>

									<option data-value className="option selected">List</option>
									<option data-value="For Ren" className="option">Grid</option>
									<option data-value="Sold" className="option">Single</option>

								</select>
								<fieldset className="text">
									<input type="text" placeholder="Energy Index in kWh/m2a" className name="text" tabIndex={2} aria-required="true" required />
								</fieldset>
							</div>
							<div className="button-submit mt-10">
								<button className="tf-button-primary" type="submit">Save &amp; Preview<i className="icon-arrow-right-add" /></button>
							</div>
						</form >
					</div >
					<div className="wg-box pl-44 mb-20">
						<h4>Price</h4>
						<form className="form-price flex gap30 flex-column">
							<div className="cols">
								<fieldset className="text">
									<input type="text" placeholder="Price ($)" className name="text" tabIndex={2} aria-required="true" required />
								</fieldset>
								<fieldset className="text">
									<input type="text" placeholder="Price Prefix" className name="text" tabIndex={2} aria-required="true" required />
								</fieldset>
							</div>
							<div className="cols">
								<fieldset className="text">
									<input type="text" placeholder="Price Suffix" className name="text" tabIndex={2} aria-required="true" required />
								</fieldset>
								<fieldset className="text">
									<input type="text" placeholder="Price Custom" className name="text" tabIndex={2} aria-required="true" required />
								</fieldset>
							</div>
							<div className="button-submit mt-10">
								<button className="tf-button-primary" type="submit">Save &amp; Preview<i className="icon-arrow-right-add" /></button>
							</div>
						</form>
					</div>
					<div className="wg-box pl-44 mb-20">
						<h4>Location</h4>
						<form className="form-location flex gap30 flex-column">
							<select className="nice-select" tabIndex={0}>

								<option data-value className="option selected">1</option>
								<option data-value="For Ren" className="option">2</option>
								<option data-value="Sold" className="option">3</option>

							</select>
							<div className="cols">
								<fieldset className="text">
									<input type="text" placeholder="Friendly Address" className name="text" tabIndex={2} aria-required="true" required />
								</fieldset>
								<fieldset className="text">
									<input type="text" placeholder="Map Location" className name="text" tabIndex={2} aria-required="true" required />
								</fieldset>
							</div>
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={400} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
							<div className="cols small">
								<fieldset className="number">
									<input type="number" placeholder="X" className name="number" tabIndex={2} defaultValue="25.783260" aria-required="true" required />
								</fieldset>
								<fieldset className="number">
									<input type="number" placeholder="Y" className name="number" tabIndex={2} defaultValue="-80.230863" aria-required="true" required />
								</fieldset>
							</div>
							<div className="button-submit mt-10">
								<button className="tf-button-primary" type="submit">Save &amp; Preview<i className="icon-arrow-right-add" /></button>
							</div>
						</form>
					</div>
					<div className="wg-box pl-44 mb-20">
						<h4>Media</h4>
						<form className="form-media">
							<div className="upload-image-wrap">
								<div className="text">Featured Image</div>
								<div className="list">
									<div className="item">
										<img src="/images/image-box/upload-1.jpg" alt="" />
										<ul className>
											<li className="edit-btns">
												<i className="flaticon-edit" />
											</li>
											<li className="delete-btns">
												<i className="flaticon-delete" />
											</li>
										</ul>
									</div>
									<div className="item">
										<img src="/images/image-box/upload-2.jpg" alt="" />
										<ul className>
											<li className="edit-btns">
												<i className="flaticon-edit" />
											</li>
											<li className="delete-btns">
												<i className="flaticon-delete" />
											</li>
										</ul>
									</div>
									<div className="item">
										<label className="uploadfile">
											<input type="file" className name="file" />
											<i className="flaticon-gallery" />
											<div>Upload</div>
										</label>
									</div>
								</div>
								<p>Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg &amp; .png</p>
							</div>
							<div className="upload-image-wrap">
								<div className="text">Gallery</div>
								<div className="list">
									<div className="item">
										<img src="/images/image-box/upload-1.jpg" alt="" />
										<ul className>
											<li className="edit-btns">
												<i className="flaticon-edit" />
											</li>
											<li className="delete-btns">
												<i className="flaticon-delete" />
											</li>
										</ul>
									</div>
									<div className="item">
										<img src="/images/image-box/upload-2.jpg" alt="" />
										<ul className>
											<li className="edit-btns">
												<i className="flaticon-edit" />
											</li>
											<li className="delete-btns">
												<i className="flaticon-delete" />
											</li>
										</ul>
									</div>
									<div className="item">
										<label className="uploadfile">
											<input type="file" className name="file" />
											<i className="flaticon-gallery" />
											<div>Upload</div>
										</label>
									</div>
								</div>
								<p>Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg &amp; .png</p>
							</div>
							<div className="upload-image-wrap">
								<div className="text">Attachments</div>
								<div className="list">
									<div className="item">
										<img src="/images/image-box/upload-1.jpg" alt="" />
										<ul className>
											<li className="edit-btns">
												<i className="flaticon-edit" />
											</li>
											<li className="delete-btns">
												<i className="flaticon-delete" />
											</li>
										</ul>
									</div>
									<div className="item">
										<img src="/images/image-box/upload-2.jpg" alt="" />
										<ul className>
											<li className="edit-btns">
												<i className="flaticon-edit" />
											</li>
											<li className="delete-btns">
												<i className="flaticon-delete" />
											</li>
										</ul>
									</div>
									<div className="item">
										<label className="uploadfile">
											<input type="file" className name="file" />
											<i className="flaticon-gallery" />
											<div>Upload</div>
										</label>
									</div>
								</div>
								<p>Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg &amp; .png</p>
							</div>
							<fieldset className="text has-top-title">
								<input type="text" placeholder="Video link" className name="text" tabIndex={2} aria-required="true" required />
								<label htmlFor>Video link</label>
							</fieldset>
							<fieldset className="description has-top-title">
								<textarea name="description" rows={4} placeholder="Virtual Tour" className tabIndex={2} aria-required="true" required defaultValue={"Lorem Ipsum Dolar Sit Amet"} />
								<label htmlFor>Virtual Tour</label>
							</fieldset>
							<div className="button-submit">
								<button className="tf-button-primary" type="submit">Save &amp; Preview<i className="icon-arrow-right-add" /></button>
							</div>
						</form>
					</div>
					<div className="wg-box pl-44 mb-20">
						<h4>Amenities</h4>
						<form className="form-amenities">
							<ul className="grid-checkbox">
								<li className="checkbox-item">
									<label>
										<p>Air Conditioning</p>
										<input type="checkbox" />
										<span className="btn-checkbox" />
									</label>
								</li>
								<li className="checkbox-item">
									<label>
										<p>Barbeque</p>
										<input type="checkbox" defaultChecked />
										<span className="btn-checkbox" />
									</label>
								</li>
								<li className="checkbox-item">
									<label>
										<p>Dryer</p>
										<input type="checkbox" />
										<span className="btn-checkbox" />
									</label>
								</li>
								<li className="checkbox-item">
									<label>
										<p>Gym</p>
										<input type="checkbox" />
										<span className="btn-checkbox" />
									</label>
								</li>
								<li className="checkbox-item">
									<label>
										<p>Lawn</p>
										<input type="checkbox" />
										<span className="btn-checkbox" />
									</label>
								</li>
								<li className="checkbox-item">
									<label>
										<p>Microwave</p>
										<input type="checkbox" />
										<span className="btn-checkbox" />
									</label>
								</li>
								<li className="checkbox-item">
									<label>
										<p>Refrigerator</p>
										<input type="checkbox" />
										<span className="btn-checkbox" />
									</label>
								</li>
								<li className="checkbox-item">
									<label>
										<p>Sauna</p>
										<input type="checkbox" />
										<span className="btn-checkbox" />
									</label>
								</li>
								<li className="checkbox-item">
									<label>
										<p>Swimming Pool</p>
										<input type="checkbox" />
										<span className="btn-checkbox" />
									</label>
								</li>
								<li className="checkbox-item">
									<label>
										<p>TV Cable</p>
										<input type="checkbox" />
										<span className="btn-checkbox" />
									</label>
								</li>
								<li className="checkbox-item">
									<label>
										<p>Washer</p>
										<input type="checkbox" />
										<span className="btn-checkbox" />
									</label>
								</li>
								<li className="checkbox-item">
									<label>
										<p>WiFi</p>
										<input type="checkbox" />
										<span className="btn-checkbox" />
									</label>
								</li>
								<li className="checkbox-item">
									<label>
										<p>Washer</p>
										<input type="checkbox" />
										<span className="btn-checkbox" />
									</label>
								</li>
								<li className="checkbox-item">
									<label>
										<p>WiFi</p>
										<input type="checkbox" />
										<span className="btn-checkbox" />
									</label>
								</li>
								<li className="checkbox-item">
									<label>
										<p>Window Coverings</p>
										<input type="checkbox" />
										<span className="btn-checkbox" />
									</label>
								</li>
							</ul>
							<div className="button-submit">
								<button className="tf-button-primary" type="submit">Save &amp; Preview<i className="icon-arrow-right-add" /></button>
							</div>
						</form>
					</div>
					<div className="wg-box pl-44">
						<h4>Floors</h4>
						<form className="form-floors">
							<div className="cols cols-two">
								<fieldset className="text has-top-title">
									<input type="text" placeholder="Name" className name="text" tabIndex={2} aria-required="true" required />
									<label htmlFor>Name</label>
								</fieldset>
								<select className="nice-select" tabIndex={0}>

									<option data-value className="option selected">USA</option>
									<option data-value="For Ren" className="option">Viet Nam</option>
									<option data-value="Sold" className="option">China</option>

								</select>
							</div>
							<div className="cols cols-two">
								<select className="nice-select" tabIndex={0}>

									<option data-value className="option selected">USA</option>
									<option data-value="For Ren" className="option">Viet Nam</option>
									<option data-value="Sold" className="option">China</option>

								</select>
								<fieldset className="text has-top-title">
									<input type="text" placeholder="Size" className name="text" tabIndex={2} aria-required="true" required />
									<label htmlFor>Size</label>
								</fieldset>
							</div >
							<fieldset className="description has-top-title">
								<textarea name="description" rows={4} placeholder="Content" className tabIndex={2} aria-required="true" required defaultValue={"Lorem Ipsum Dolar Sit Amet"} />
								<label htmlFor>Content</label>
							</fieldset>
							<div className="upload-image-wrap">
								<div className="text">Preview Image</div>
								<div className="list">
									<div className="item">
										<img src="/images/image-box/upload-1.jpg" alt="" />
										<ul className>
											<li className="edit-btns">
												<i className="flaticon-edit" />
											</li>
											<li className="delete-btns">
												<i className="flaticon-delete" />
											</li>
										</ul>
									</div>
									<div className="item">
										<img src="/images/image-box/upload-2.jpg" alt="" />
										<ul className>
											<li className="edit-btns">
												<i className="flaticon-edit" />
											</li>
											<li className="delete-btns">
												<i className="flaticon-delete" />
											</li>
										</ul>
									</div>
									<div className="item">
										<label className="uploadfile">
											<input type="file" className name="file" />
											<i className="flaticon-gallery" />
											<div>Upload</div>
										</label>
									</div>
								</div>
								<p>Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg &amp; .png</p>
							</div>
							<div className="button-submit">
								<button className="tf-button-primary" type="submit">Save &amp; Preview<i className="icon-arrow-right-add" /></button>
							</div>
						</form >
					</div >
				</div >

			</LayoutAdmin >
		</>
	)
}
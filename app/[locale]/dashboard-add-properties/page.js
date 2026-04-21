import LayoutAdmin from "@/components/layout/LayoutAdmin"

const PROPERTY_AMENITY_SECTIONS = [
	{
		key: "esas",
		title: "Əsas",
		items: [
			{ name: "amenity_wifi", label: "WiFi" },
			{ name: "amenity_tv", label: "TV" },
			{ name: "amenity_kondisioner", label: "Kondisioner" },
			{ name: "amenity_istilik_sistemi", label: "İstilik sistemi" },
			{ name: "amenity_metbex", label: "Mətbəx" },
			{ name: "amenity_paltaryuyan", label: "Paltaryuyan" },
		],
	},
	{
		key: "komfort",
		title: "Komfort",
		items: [
			{ name: "amenity_balkon", label: "Balkon" },
			{ name: "amenity_lift", label: "Lift" },
			{ name: "amenity_parking", label: "Parking" },
			{ name: "amenity_hovuz", label: "Hovuz" },
			{ name: "amenity_sauna", label: "Sauna" },
		],
	},
	{
		key: "tehlukesizlik",
		title: "Təhlükəsizlik",
		items: [
			{ name: "amenity_kamera", label: "Kamera" },
			{ name: "amenity_muhafize", label: "Mühafizə" },
			{ name: "amenity_domofon", label: "Domofon" },
		],
	},
]

const PROPERTY_RULE_GROUPS = [
	{ name: "rule_smoking", label: "Siqaret" },
	{ name: "rule_pets", label: "Ev heyvanları" },
	{ name: "rule_party", label: "Party" },
]

export default function DashboardAddProperties() {

	return (
		<>

			<LayoutAdmin breadcrumbTitle="Add New Property">
				<div>
					<div className="wg-box pl-44 mb-20">
						<h4>Basic information</h4>
						<form className="form-bacsic-infomation flex gap30 flex-column">
							<fieldset className="text has-top-title">
								<input type="text" placeholder="Property Title *" name="text" tabIndex={2} aria-required="true" required />
								<label htmlFor>Property Title *</label>
							</fieldset>
							<select className="nice-select" tabIndex={0}>

								<option data-value className="option selected">List</option>
								<option data-value="For Ren" className="option">Grid</option>
								<option data-value="Sold" className="option">Single</option>

							</select>
							<fieldset className="description has-top-title">
								<textarea name="description" rows={4} placeholder="Property Description" tabIndex={2} aria-required="true" required defaultValue={"Lorem Ipsum Dolar Sit Amet"} />
								<label htmlFor>Property Description</label>
							</fieldset>
							<div className="button-submit mt-10">
								<button className="tf-button-primary" type="submit">Save &amp; Preview<i className="icon-arrow-right-add" /></button>
							</div>
						</form>
					</div>
					<div className="wg-box pl-44 mb-20">
						<h4>Price</h4>
						<form className="form-price flex gap30 flex-column">
							<div className="cols">
								<fieldset className="text">
									<input type="text" placeholder="Price ($)" name="text" tabIndex={2} aria-required="true" required />
								</fieldset>
								<fieldset className="text">
									<input type="text" placeholder="Price Prefix" name="text" tabIndex={2} aria-required="true" required />
								</fieldset>
							</div>
							<div className="cols">
								<fieldset className="text">
									<input type="text" placeholder="Price Suffix" name="text" tabIndex={2} aria-required="true" required />
								</fieldset>
								<fieldset className="text">
									<input type="text" placeholder="Price Custom" name="text" tabIndex={2} aria-required="true" required />
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
									<input type="text" placeholder="Friendly Address" name="text" tabIndex={2} aria-required="true" required />
								</fieldset>
								<fieldset className="text">
									<input type="text" placeholder="Map Location" name="text" tabIndex={2} aria-required="true" required />
								</fieldset>
							</div>
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={400} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
							<div className="cols small">
								<fieldset className="number">
									<input type="number" placeholder="X" name="number" tabIndex={2} defaultValue="25.783260" aria-required="true" required />
								</fieldset>
								<fieldset className="number">
									<input type="number" placeholder="Y" name="number" tabIndex={2} defaultValue="-80.230863" aria-required="true" required />
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
										<ul>
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
										<ul>
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
											<input type="file" name="file" />
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
										<ul>
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
										<ul>
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
											<input type="file" name="file" />
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
										<ul>
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
										<ul>
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
											<input type="file" name="file" />
											<i className="flaticon-gallery" />
											<div>Upload</div>
										</label>
									</div>
								</div>
								<p>Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg &amp; .png</p>
							</div>
							<fieldset className="text has-top-title">
								<input type="text" placeholder="Video link" name="text" tabIndex={2} aria-required="true" required />
								<label htmlFor>Video link</label>
							</fieldset>
							
							<div className="button-submit">
								<button className="tf-button-primary" type="submit">Save &amp; Preview<i className="icon-arrow-right-add" /></button>
							</div>
						</form>
					</div>
					<div className="wg-box pl-44 mb-20">
						<h4>İmkanlar (Amenities)</h4>
						<form className="form-amenities flex gap30 flex-column">
							{PROPERTY_AMENITY_SECTIONS.map((section) => (
								<div key={section.key}>
									<p style={{ fontWeight: 600, marginBottom: 12, fontSize: 17 }}>{section.title}</p>
									<ul className="grid-checkbox">
										{section.items.map((item) => (
											<li key={item.name} className="checkbox-item">
												<label>
													<p>{item.label}</p>
													<input type="checkbox" name={item.name} value="1" />
													<span className="btn-checkbox" />
												</label>
											</li>
										))}
									</ul>
								</div>
							))}
							<div>
								<p style={{ fontWeight: 600, marginBottom: 12, fontSize: 17 }}>Qaydalar</p>
								<ul className="grid-checkbox ">
									{PROPERTY_RULE_GROUPS.map((rule) => (
										<li key={rule.name} className="amenity-rule-cell ">
											<fieldset>
												<legend>{rule.label}</legend>
												<div className="amenity-rule-radios ">
													<label>
														<input type="radio" name={rule.name} value="yes" />
														<span>İcazə var</span>
													</label>
													<label>
														<input type="radio" name={rule.name} value="no" defaultChecked />
														<span>İcazə yoxdur</span>
													</label>
												</div>
											</fieldset>
										</li>
									))}
								</ul>
							</div>
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
									<input type="text" placeholder="Name" name="text" tabIndex={2} aria-required="true" required />
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
									<input type="text" placeholder="Size" name="text" tabIndex={2} aria-required="true" required />
									<label htmlFor>Size</label>
								</fieldset>
							</div >
							<fieldset className="description has-top-title">
								<textarea name="description" rows={4} placeholder="Content" tabIndex={2} aria-required="true" required defaultValue={"Lorem Ipsum Dolar Sit Amet"} />
								<label htmlFor>Content</label>
							</fieldset>
							<div className="upload-image-wrap">
								<div className="text">Preview Image</div>
								<div className="list">
									<div className="item">
										<img src="/images/image-box/upload-1.jpg" alt="" />
										<ul>
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
										<ul>
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
											<input type="file" name="file" />
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
import LayoutAdmin from "@/components/layout/LayoutAdmin"
import TimeDigitsInput from "@/components/dashboard/TimeDigitsInput"

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

const PROPERTY_CATEGORIES = [
	{ value: "menzil", label: "Mənzil" },
	{ value: "aframe", label: "Aframe" },
	{ value: "villa", label: "Villa" },
	{ value: "heyet_evi", label: "Həyət evi" },
	{ value: "hostel", label: "Hostel" },
	{ value: "otel", label: "Otel" },
]

/** Şəhər / rayon — API ilə uyğunlaşdırmaq üçün value saxlanılır */
const CITY_REGIONS = [
	{ value: "baki", label: "Bakı" },
	{ value: "sumqayit", label: "Sumqayıt" },
	{ value: "gence", label: "Gəncə" },
	{ value: "mingecevir", label: "Mingəçevir" },
	{ value: "seki", label: "Şəki" },
	{ value: "lenkeran", label: "Lənkəran" },
	{ value: "naftalan", label: "Naftalan" },
	{ value: "diger", label: "Digər" },
]

/** Bakı mərkəzi — xəritə önizləməsi (pin üçün sonradan iframe URL API-dən dəyişilə bilər) */
const MAP_EMBED_BAKU =
	"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.90504353077!2d49.8185576!3d40.3931052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd475b172%3A0xae10b7968942d9e8!2sBaku%2C%20Azerbaijan!5e0!3m2!1saz!2s!4v1700000000000!5m2!1saz!2s"

/** Şəkil yükləmə qaydaları — backend ilə eyni rəqəmləri saxlayın */
const MEDIA_RULES = {
	minWidth: 800,
	minHeight: 600,
	maxFileMb: 5,
}

/** has-top-title üzən etiket əvəzinə: mətn inputun üstündə, kənarda */
const LABEL_ABOVE = { display: "block", marginBottom: 10, fontWeight: 600, fontSize: 17 }

export default function DashboardAddProperties() {

	return (
		<>

			<LayoutAdmin breadcrumbTitle="Add New Property">
				<div>
					<div className="wg-box pl-44 mb-20">
						<h4>
							Əsas məlumatlar <span style={{ fontWeight: 400, fontSize: 15, opacity: 0.85 }}>(Core Info)</span>
						</h4>
						<form className="form-bacsic-infomation flex gap30 flex-column">
							<fieldset className="text">
								<label htmlFor="property-title" style={LABEL_ABOVE}>
									Elan başlığı (maks. 100 simvol) *
								</label>
								<input
									id="property-title"
									type="text"
									name="title"
									maxLength={100}
									placeholder="Elan başlığı *"
									tabIndex={2}
									aria-required="true"
									required
								/>
							</fieldset>
							<div>
								<label htmlFor="property-category" style={LABEL_ABOVE}>
									Kateqoriya
								</label>
								<select
									id="property-category"
									className="nice-select"
									name="category"
									tabIndex={0}
									required
									defaultValue=""
								>
									<option value="" disabled className="option">
										Kateqoriya seçin
									</option>
									{PROPERTY_CATEGORIES.map((cat) => (
										<option key={cat.value} value={cat.value} className="option">
											{cat.label}
										</option>
									))}
								</select>
							</div>
							<fieldset className="description">
								<label htmlFor="property-description" style={LABEL_ABOVE}>
									Təsvir *
								</label>
								<textarea
									id="property-description"
									name="description"
									rows={5}
									placeholder="Elanın təsviri *"
									tabIndex={2}
									aria-required="true"
									required
								/>
							</fieldset>
							<div className="cols cols-two">
								<fieldset className="text">
									<label htmlFor="property-check-in" style={LABEL_ABOVE}>
										Check-in
									</label>
									<TimeDigitsInput id="property-check-in" name="check_in" placeholder="14:00" tabIndex={2} />
								</fieldset>
								<fieldset className="text">
									<label htmlFor="property-check-out" style={LABEL_ABOVE}>
										Check-out
									</label>
									<TimeDigitsInput id="property-check-out" name="check_out" placeholder="11:00" tabIndex={2} />
								</fieldset>
							</div>
							<div className="cols">
								<fieldset className="text">
									<label htmlFor="property-price" style={LABEL_ABOVE}>
										Qiymət (AZN) *
									</label>
									<input
										id="property-price"
										type="text"
										name="price"
										inputMode="decimal"
										placeholder="Məs. 120"
										tabIndex={2}
										aria-required="true"
										required
									/>
								</fieldset>
							</div>
							<div className="button-submit mt-10">
								<button className="tf-button-primary" type="submit">
									Saxla və ön baxış
									<i className="icon-arrow-right-add" />
								</button>
							</div>
						</form>
					</div>
					<div className="wg-box pl-44 mb-20">
						<h4>
							Ünvan və lokasiya <span style={{ fontWeight: 400, fontSize: 15, opacity: 0.85 }}>(Location)</span>
						</h4>
						<form className="form-location flex gap30 flex-column">
							<div>
								<label htmlFor="property-city-region" style={LABEL_ABOVE}>
									Şəhər (rayon)
								</label>
								<select
									id="property-city-region"
									className="nice-select"
									name="city_region"
									tabIndex={0}
									required
									defaultValue=""
								>
									<option value="" disabled className="option">
										Şəhər və ya rayon seçin
									</option>
									{CITY_REGIONS.map((r) => (
										<option key={r.value} value={r.value} className="option">
											{r.label}
										</option>
									))}
								</select>
							</div>
							<fieldset className="description">
								<label htmlFor="property-street-address" style={LABEL_ABOVE}>
									Tam ünvan (küçə, bina) *
								</label>
								<textarea
									id="property-street-address"
									name="street_address"
									rows={3}
									placeholder="Küçə, bina, mənzil *"
									tabIndex={2}
									aria-required="true"
									required
								/>
							</fieldset>
							<div>
								<p style={{ fontWeight: 600, marginBottom: 12, fontSize: 15 }}>Xəritədə pin (Google Maps)</p>
								<iframe
									title="Xəritə — Bakı (önizləmə)"
									src={MAP_EMBED_BAKU}
									height={400}
									style={{ border: 0, width: "100%" }}
									allowFullScreen
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								/>
							</div>
							<fieldset className="description">
								<label htmlFor="property-landmark" style={LABEL_ABOVE}>
									Landmark (yaxın obyektlər)
								</label>
								<textarea
									id="property-landmark"
									name="landmark"
									rows={3}
									placeholder="Məs. metro, park, ticarət mərkəzi"
									tabIndex={2}
								/>
							</fieldset>
							<div className="button-submit mt-10">
								<button className="tf-button-primary" type="submit">
									Saxla və ön baxış
									<i className="icon-arrow-right-add" />
								</button>
							</div>
						</form>
					</div>
					<div className="wg-box pl-44 mb-20">
						<h4>
							Media <span style={{ fontWeight: 400, fontSize: 15, opacity: 0.85 }}>(Şəkillər və video)</span>
						</h4>
						<form className="form-media flex gap30 flex-column">
							<div
								style={{
									padding: "14px 16px",
									background: "#f5f5f5",
									borderRadius: 8,
									fontSize: 14,
									lineHeight: 1.5,
								}}
							>
								<p style={{ fontWeight: 600, marginBottom: 8 }}>Qaydalar</p>
								<ul style={{ margin: 0, paddingLeft: 20 }}>
									<li>
										Minimum ölçü (en × hündürlük): {MEDIA_RULES.minWidth}×{MEDIA_RULES.minHeight} px
									</li>
									<li>Hər fayl üçün maksimum ölçü: {MEDIA_RULES.maxFileMb} MB</li>
									<li>Format: JPG, PNG, WebP</li>
								</ul>
							</div>

							<div className="upload-image-wrap">
								<div className="text">Cover şəkil (1 ədəd – məcburi) *</div>
								<div className="list">
									<div className="item">
										<label className="uploadfile" htmlFor="property-cover-image">
											<input
												id="property-cover-image"
												type="file"
												name="cover_image"
												accept="image/jpeg,image/png,image/webp"
												required
											/>
											<i className="flaticon-gallery" />
											<div>Cover yüklə</div>
										</label>
									</div>
								</div>
							</div>

							<div className="upload-image-wrap">
								<div className="text">Gallery (ən azı 5 şəkil) *</div>
								<div className="list">
									<div className="item" style={{ minWidth: "100%", maxWidth: "100%" }}>
										<label className="uploadfile" htmlFor="property-gallery-images" style={{ width: "100%" }}>
											<input
												id="property-gallery-images"
												type="file"
												name="gallery_images[]"
												accept="image/jpeg,image/png,image/webp"
												multiple
												required
											/>
											<i className="flaticon-gallery" />
											<div>Şəkilləri seçin (Ctrl ilə çoxlu)</div>
										</label>
									</div>
								</div>
								<p style={{ marginTop: 10 }}>
									Ən azı 5 şəkil seçilməlidir; təsdiq server tərəfində də yoxlanılacaq.
								</p>
							</div>

							<fieldset className="text">
								<label htmlFor="property-video-youtube" style={LABEL_ABOVE}>
									Video (YouTube, opsional)
								</label>
								<input
									id="property-video-youtube"
									type="url"
									name="video_youtube_url"
									inputMode="url"
									autoComplete="off"
									placeholder="https://www.youtube.com/watch?v=… və ya youtu.be/…"
									tabIndex={2}
								/>
							</fieldset>

							<div className="button-submit">
								<button className="tf-button-primary" type="submit">
									Saxla və ön baxış
									<i className="icon-arrow-right-add" />
								</button>
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
							<div className="button-submit">
								<button className="tf-button-primary" type="submit">Save &amp; Preview<i className="icon-arrow-right-add" /></button>
							</div>
						</form>
					</div>
					<div className="wg-box pl-44 mb-20">
						<h4>
							Otaq və tutum <span style={{ fontWeight: 400, fontSize: 15, opacity: 0.85 }}>(Capacity)</span>
						</h4>
						<form className="form-capacity flex gap30 flex-column">
							<div className="cols cols-two">
								<fieldset className="number">
									<label htmlFor="property-room-count" style={LABEL_ABOVE}>
										Otaq sayı *
									</label>
									<input
										id="property-room-count"
										type="number"
										name="room_count"
										min={1}
										step={1}
										inputMode="numeric"
										placeholder="0"
										tabIndex={2}
										aria-required="true"
										required
									/>
								</fieldset>
								<fieldset className="number">
									<label htmlFor="property-bed-count" style={LABEL_ABOVE}>
										Yataq sayı *
									</label>
									<input
										id="property-bed-count"
										type="number"
										name="bed_count"
										min={1}
										step={1}
										inputMode="numeric"
										placeholder="0"
										tabIndex={2}
										aria-required="true"
										required
									/>
								</fieldset>
							</div>
							<div className="cols cols-two">
								<fieldset className="number">
									<label htmlFor="property-bathroom-count" style={LABEL_ABOVE}>
										Hamam sayı *
									</label>
									<input
										id="property-bathroom-count"
										type="number"
										name="bathroom_count"
										min={1}
										step={1}
										inputMode="numeric"
										placeholder="0"
										tabIndex={2}
										aria-required="true"
										required
									/>
								</fieldset>
								<fieldset className="number">
									<label htmlFor="property-max-guests" style={LABEL_ABOVE}>
										Maksimum qonaq sayı *
									</label>
									<input
										id="property-max-guests"
										type="number"
										name="max_guests"
										min={1}
										step={1}
										inputMode="numeric"
										placeholder="0"
										tabIndex={2}
										aria-required="true"
										required
									/>
								</fieldset>
							</div>
							<div className="button-submit">
								<button className="tf-button-primary" type="submit">
									Saxla və ön baxış
									<i className="icon-arrow-right-add" />
								</button>
							</div>
						</form>
					</div>
				</div >

			</LayoutAdmin >
		</>
	)
}
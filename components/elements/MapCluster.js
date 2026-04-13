import L from 'leaflet'
import "leaflet/dist/leaflet.css"
import Link from 'next/link'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
// import './mapStyles.css'; // Ensure you have this CSS file for custom styles

// Create a custom marker using L.divIcon
const customMarker = L.divIcon({
	className: 'face', // CSS class to style the marker
	iconSize: [30, 30] // Icon size
})

export default function MapCluster({ topmap }) {
	return (
		<MapContainer
			style={{ height: `${topmap ? "600px" : "100%"}`, zIndex: -1 }}
			center={[51.0, 19.0]}
			zoom={4}
			maxZoom={18}
			scrollWheelZoom={false}
		>
			<TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />

			{/* Markers */}
			<Marker position={[49.8397, 24.0297]} icon={customMarker}>
				<Popup>
					<div className="map-box">
						<div className="map-listing-item">
							<div className="inner-box">
								{/* <div className="infoBox-close"><i className="icon-close" /></div> */}
								<div className="image-box">
									<figure className="image"><img src="/images/image-box/map-location-1.jpg" alt /></figure>
								</div>
								<div className="content">
									<div className="price">$815,000</div>
									<h4><Link href="/property-grid-v2/archer-house">Archer House</Link></h4>
									<div className="icon-box">
										<div className="item">
											<i className="flaticon-hotel" />
											<p>4</p>
										</div>
										<div className="item">
											<i className="flaticon-bath-tub" />
											<p>3</p>
										</div>
										<div className="item">
											<i className="flaticon-minus-front" />
											<p>2660</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</Popup>
			</Marker>
			<Marker position={[52.2297, 21.0122]} icon={customMarker}>
				<Popup>
					<div className="map-box">
						<div className="map-listing-item">
							<div className="inner-box">
								{/* <div className="infoBox-close"><i className="icon-close" /></div> */}
								<div className="image-box">
									<figure className="image"><img src="/images/image-box/map-location-1.jpg" alt /></figure>
								</div>
								<div className="content">
									<div className="price">$815,000</div>
									<h4><Link href="/property-grid-v2/archer-house">Archer House</Link></h4>
									<div className="icon-box">
										<div className="item">
											<i className="flaticon-hotel" />
											<p>4</p>
										</div>
										<div className="item">
											<i className="flaticon-bath-tub" />
											<p>3</p>
										</div>
										<div className="item">
											<i className="flaticon-minus-front" />
											<p>2660</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</Popup>
			</Marker>
			<Marker position={[51.5074, -0.0901]} icon={customMarker}>
				<Popup>
					<div className="map-box">
						<div className="map-listing-item">
							<div className="inner-box">
								{/* <div className="infoBox-close"><i className="icon-close" /></div> */}
								<div className="image-box">
									<figure className="image"><img src="/images/image-box/map-location-1.jpg" alt /></figure>
								</div>
								<div className="content">
									<div className="price">$815,000</div>
									<h4><Link href="/property-grid-v2/archer-house">Archer House</Link></h4>
									<div className="icon-box">
										<div className="item">
											<i className="flaticon-hotel" />
											<p>4</p>
										</div>
										<div className="item">
											<i className="flaticon-bath-tub" />
											<p>3</p>
										</div>
										<div className="item">
											<i className="flaticon-minus-front" />
											<p>2660</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</Popup>
			</Marker>
		</MapContainer>
	)
}

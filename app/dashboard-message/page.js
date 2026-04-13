
import LayoutAdmin from "@/components/layout/LayoutAdmin"
import Link from "next/link"
export default function DashboardMessage() {

	return (
		<>

			<LayoutAdmin breadcrumbTitle="Message">
				<div className="message-wrap">
					<div className="wg-box left">
						<form className="form-search flex-grow">
							<fieldset className="name">
								<input type="text" placeholder="Search" className="style-3" name="name" tabIndex={2} aria-required="true" required />
							</fieldset>
							<div className="button-submit style-absolute-left-center">
								<button className="style-icon-default" type="submit"><i className="flaticon-magnifiying-glass" /></button>
							</div>
						</form>
						<ul className="people">
							<li className="chat active-chat" data-chat="person1">
								<div className="list-message">
									<div className="message-item">
										<div className="avt">
											<img src="/images/author/author-5.png" alt="" />
										</div>
										<div className="flex justify-between flex-grow relative">
											<div>
												<div className="name">
													<Link href="/#">Darlene Robertson</Link>
												</div>
												<div className="sub">Head of Development</div>
											</div>
											<div className="time">35 mins</div>
										</div>
									</div>
								</div>
							</li>
							<li className="person" data-chat="person2">
								<div className="list-message">
									<div className="message-item">
										<div className="avt">
											<img src="/images/author/author-7.png" alt="" />
										</div>
										<div className="flex justify-between flex-grow relative">
											<div>
												<div className="name">
													<Link href="/#">Jane Cooper</Link>
												</div>
												<div className="sub">Head of Development</div>
											</div>
											<div className="time">35 mins</div>
											<div className="number">2</div>
										</div>
									</div>
								</div>
							</li>
							<li className="person" data-chat="person3">
								<div className="list-message">
									<div className="message-item">
										<div className="avt">
											<img src="/images/author/author-8.png" alt="" />
										</div>
										<div className="flex justify-between flex-grow relative">
											<div>
												<div className="name">
													<Link href="/#">Arlene McCoy</Link>
												</div>
												<div className="sub">Head of Development</div>
											</div>
											<div className="time">35 mins</div>
											<div className="number bg-green">2</div>
										</div>
									</div>
								</div>
							</li>
							<li className="person" data-chat="person4">
								<div className="list-message">
									<div className="message-item">
										<div className="avt">
											<img src="/images/author/author-9.png" alt="" />
										</div>
										<div className="flex justify-between flex-grow relative">
											<div>
												<div className="name">
													<Link href="/#">Albert Flores</Link>
												</div>
												<div className="sub">Head of Development</div>
											</div>
											<div className="time">35 mins</div>
										</div>
									</div>
								</div>
							</li>
							<li className="person" data-chat="person5">
								<div className="list-message">
									<div className="message-item">
										<div className="avt">
											<img src="/images/author/author-10.png" alt="" />
										</div>
										<div className="flex justify-between flex-grow relative">
											<div>
												<div className="name">
													<Link href="/#">Cameron Williamson</Link>
												</div>
												<div className="sub">Head of Development</div>
											</div>
											<div className="time">35 mins</div>
											<div className="number bg-yellow">2</div>
										</div>
									</div>
								</div>
							</li>
							<li className="person" data-chat="person6">
								<div className="list-message">
									<div className="message-item">
										<div className="avt">
											<img src="/images/author/author-11.png" alt="" />
										</div>
										<div className="flex justify-between flex-grow relative">
											<div>
												<div className="name">
													<Link href="/#">Kristin Watson</Link>
												</div>
												<div className="sub">Head of Development</div>
											</div>
											<div className="time">35 mins</div>
										</div>
									</div>
								</div>
							</li>
							<li className="person" data-chat="person7">
								<div className="list-message">
									<div className="message-item">
										<div className="avt">
											<img src="/images/author/author-10.png" alt="" />
										</div>
										<div className="flex justify-between flex-grow relative">
											<div>
												<div className="name">
													<Link href="/#">Annette Black</Link>
												</div>
												<div className="sub">Head of Development</div>
											</div>
											<div className="time">35 mins</div>
										</div>
									</div>
								</div>
							</li>
							<li className="person" data-chat="person8">
								<div className="list-message">
									<div className="message-item">
										<div className="avt">
											<img src="/images/author/author-9.png" alt="" />
										</div>
										<div className="flex justify-between flex-grow relative">
											<div>
												<div className="name">
													<Link href="/#">Jacob Jones</Link>
												</div>
												<div className="sub">Head of Development</div>
											</div>
											<div className="time">35 mins</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<form className="wg-box right">
						<div className="head">
							<div className="list-message">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-9.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div>
											<div className="name">
												<Link href="/#">Arlene McCoy</Link>
											</div>
											<div className="sub">Active</div>
										</div>
									</div>
								</div>
							</div>
							<Link href="/#">Delete Conversation</Link>
						</div>
						<div className="chat active-chat" data-chat="person1">
							<div className="list-message">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-7.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">Albert Flores</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble you style">
								How likely are you to recommend our company to your friends and family?
							</div>
							<div className="list-message style-me">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-9.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">You</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble me">
								Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.
							</div>
							<div className="list-message">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-5.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">Cameron Williamson</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble you style">
								Ok, Understood!
							</div>
							<div className="list-message style-me">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-9.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">You</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble me">
								Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.
							</div>
						</div>
						<div className="chat" data-chat="person2">
							<div className="list-message">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-7.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">Albert Flores</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble you style">
								How likely are you to recommend our company to your friends and family?
							</div>
							<div className="list-message style-me">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-9.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">You</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble me">
								Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.
							</div>
							<div className="list-message">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-5.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">Cameron Williamson</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble you style">
								Ok, Understood!
							</div>
							<div className="list-message style-me">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-9.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">You</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble me">
								Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.
							</div>
						</div>
						<div className="chat" data-chat="person3">
							<div className="list-message">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-7.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">Albert Flores</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble you style">
								How likely are you to recommend our company to your friends and family?
							</div>
							<div className="list-message style-me">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-9.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">You</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble me">
								Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.
							</div>
						</div>
						<div className="chat" data-chat="person4">
							<div className="list-message">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-7.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">Albert Flores</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble you style">
								How likely are you to recommend our company to your friends and family?
							</div>
							<div className="list-message style-me">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-9.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">You</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble me">
								Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.
							</div>
							<div className="list-message">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-5.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">Cameron Williamson</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble you style">
								Ok, Understood!
							</div>
							<div className="list-message style-me">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-9.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">You</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble me">
								Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.
							</div>
						</div>
						<div className="chat" data-chat="person5">
							<div className="list-message">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-7.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">Albert Flores</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble you style">
								How likely are you to recommend our company to your friends and family?
							</div>
							<div className="list-message style-me">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-9.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">You</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble me">
								Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.
							</div>
							<div className="list-message">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-5.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">Cameron Williamson</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble you style">
								Ok, Understood!
							</div>
							<div className="list-message style-me">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-9.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">You</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble me">
								Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.
							</div>
						</div>
						<div className="chat" data-chat="person6">
							<div className="list-message">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-7.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">Albert Flores</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble you style">
								How likely are you to recommend our company to your friends and family?
							</div>
							<div className="list-message style-me">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-9.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">You</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble me">
								Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.
							</div>
						</div>
						<div className="chat" data-chat="person7">
							<div className="list-message">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-7.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">Albert Flores</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble you style">
								How likely are you to recommend our company to your friends and family?
							</div>
							<div className="list-message style-me">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-9.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">You</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble me">
								Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.
							</div>
							<div className="list-message">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-5.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">Cameron Williamson</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble you style">
								Ok, Understood!
							</div>
							<div className="list-message style-me">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-9.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">You</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble me">
								Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.
							</div>
						</div>
						<div className="chat" data-chat="person8">
							<div className="list-message">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-7.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">Albert Flores</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble you style">
								How likely are you to recommend our company to your friends and family?
							</div>
							<div className="list-message style-me">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-9.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">You</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble me">
								Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.
							</div>
							<div className="list-message">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-5.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">Cameron Williamson</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble you style">
								Ok, Understood!
							</div>
							<div className="list-message style-me">
								<div className="message-item">
									<div className="avt">
										<img src="/images/author/author-9.png" alt="" />
									</div>
									<div className="flex justify-between flex-grow relative">
										<div className="flex gap10 items-center">
											<div className="name">
												<Link href="/#">You</Link>
											</div>
											<div className="sub">35 mins</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bubble me">
								Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.
							</div>
						</div>
						<div className="write">
							<input type="text" placeholder="Type a Message" className="style-default" name="name" tabIndex={2} aria-required="true" required />
							<Link href="/#" className="tf-button-primary btns-send">Send Message<i className="icon-arrow-right-add" /></Link>
						</div>
					</form>
				</div>

			</LayoutAdmin>
		</>
	)
}
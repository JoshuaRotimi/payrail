import React from "react";
import {FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer,
    FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialIcons,
    SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights} from "./FooterElements";
import {FaFacebook, FaYoutube, FaTwitter, FaLinkedin, FaInstagram} from "react-icons/all";
import {animateScroll as scroll} from "react-scroll";

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                    <FooterLink to={'/signin'}>How it works</FooterLink>
                                    <FooterLink to={'/signin'}>Testimonials</FooterLink>
                                    <FooterLink to={'/signin'}>Careers</FooterLink>
                                    <FooterLink to={'/signin'}>Investors</FooterLink>
                                    <FooterLink to={'/signin'}>Terms of Service</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to={'/'}>Submit Videos</FooterLink>
                                <FooterLink to={'/'}>Ambassadors</FooterLink>
                                <FooterLink to={'/'}>Agency</FooterLink>
                                <FooterLink to={'/'}>Influencer</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>

                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to={'/'}>Contact</FooterLink>
                                <FooterLink to={'/'}>Support</FooterLink>
                                <FooterLink to={'/'}>Destinations</FooterLink>
                                <FooterLink to={'/'}>Sponsorships</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to={'/'}>Instagram</FooterLink>
                                <FooterLink to={'/'}>Facebook</FooterLink>
                                <FooterLink to={'/'}>YouTube</FooterLink>
                                <FooterLink to={'/'}>Twitter</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to={'/'} onClick={toggleHome}>Payrail</SocialLogo>
                            <WebsiteRights>Payrail &copy; {new Date().getFullYear()} All rights reserved</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href={'/'} target={'_blank'} aria-label={'FaceBook'}><FaFacebook/></SocialIconLink>
                                <SocialIconLink href={'/'} target={'_blank'} aria-label={'Instagram'}><FaInstagram/></SocialIconLink>
                                <SocialIconLink href={'/'} target={'_blank'} aria-label={'Youtube'}><FaYoutube/></SocialIconLink>
                                <SocialIconLink href={'/'} target={'_blank'} aria-label={'Twitter'}><FaTwitter/></SocialIconLink>
                                <SocialIconLink href={'/'} target={'_blank'} aria-label={'Linkedin'}><FaLinkedin/></SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
};

export default Footer;
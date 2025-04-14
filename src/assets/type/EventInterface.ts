export interface SlideEvent {
  id: string;
  eventName: string;
  eventStartDate: string;
  eventStartTime: string;
  eventEndDate: string;
  eventEndTime: string;
  startUTC: string;
  endUTC: string;
  startLocal: string;
  endLocal: string;
  eventImage: string;
  eventPhoneImage: string;
  eventLargeImage: string;
  isOnline: boolean;
  eventURL: string;
  imageGallery: string[];
}

export interface HomeEventForLargeProps {
  slideEvents: SlideEvent[];
  slideNext: () => void;
  slidePrev: () => void;
  renderEventPosition: (index: number, total: number) => string;
}

export interface HomeEventForMobileProps {
  slideEvents: SlideEvent[];
  mobileSlideNext: () => void;
  mobileSlidePrev: () => void;
}

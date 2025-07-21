import React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
  icons:
    | 'facebook'
    | 'google'
    | 'arrow_right'
    | 'angle_down'
    | 'angle_right'
    | 'clear'
    | 'check';
}

export const SvgIcons = ({
  icons,
  width = 25,
  height = 25,
  color = '#000000',
}: Props) => {
  switch (icons) {
    case 'facebook':
      return (
        <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
          <G clipPath="url(#clip0_114_65)">
            <Path
              d="M24.5 12c0-6.627-5.373-12-12-12S.5 5.373.5 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.578V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H16.33c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.469h-2.796v8.385C20.112 22.954 24.5 17.99 24.5 12z"
              fill="#1877F2"
            />
            <Path
              d="M17.171 15.469L17.703 12h-3.328V9.75c0-.949.465-1.875 1.956-1.875h1.513V4.922s-1.373-.234-2.686-.234c-2.741 0-4.533 1.66-4.533 4.668V12H7.578v3.469h3.047v8.385a12.13 12.13 0 003.75 0V15.47h2.796z"
              fill="#fff"
            />
          </G>
          <Defs>
            <ClipPath id="clip0_114_65">
              <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
            </ClipPath>
          </Defs>
        </Svg>
      );
    case 'google':
      return (
        <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
          <G clipPath="url(#clip0_203_32)">
            <Path
              d="M24.266 12.276c0-.815-.066-1.636-.207-2.438H12.74v4.621h6.482a5.554 5.554 0 01-2.399 3.646v2.999h3.867c2.27-2.09 3.576-5.177 3.576-8.828z"
              fill="#4285F4"
            />
            <Path
              d="M12.74 24c3.237 0 5.966-1.062 7.955-2.896l-3.867-2.998c-1.076.731-2.465 1.146-4.083 1.146-3.131 0-5.786-2.112-6.738-4.952h-3.99v3.091a12.002 12.002 0 0010.723 6.61z"
              fill="#34A853"
            />
            <Path
              d="M6.003 14.3a7.188 7.188 0 010-4.594V6.615H2.016a12.01 12.01 0 000 10.776l3.987-3.09z"
              fill="#FBBC04"
            />
            <Path
              d="M12.74 4.75a6.52 6.52 0 014.603 1.799l3.427-3.426A11.533 11.533 0 0012.74 0 11.998 11.998 0 002.017 6.615l3.986 3.09C6.95 6.863 9.609 4.75 12.74 4.75z"
              fill="#EA4335"
            />
          </G>
          <Defs>
            <ClipPath id="clip0_203_32">
              <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
            </ClipPath>
          </Defs>
        </Svg>
      );
    case 'arrow_right':
      return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
          <Path
            d="M19 10.5h-8.793l2.439-2.44a1.5 1.5 0 00-2.121-2.121L6.939 9.525a3.505 3.505 0 000 4.95l3.586 3.586a1.5 1.5 0 002.121-2.122l-2.439-2.44H19a1.5 1.5 0 000-3z"
            fill="#374957"
          />
        </Svg>
      );
    case 'angle_down':
      return (
        <Svg width={width} height={height} viewBox="0 0 27 31" fill="none">
          <G clipPath="url(#clip0_201_5617)">
            <Path
              d="M12.256 22.926L.997 11.668a1.39 1.39 0 010-1.967L2.31 8.388a1.39 1.39 0 011.964-.002l8.965 8.922 8.964-8.922a1.39 1.39 0 011.964.002l1.313 1.313a1.39 1.39 0 010 1.967L14.223 22.926a1.39 1.39 0 01-1.966 0z"
              fill="#000"
            />
          </G>
          <Defs>
            <ClipPath id="clip0_201_5617">
              <Path
                fill="#fff"
                transform="translate(.262 .827)"
                d="M0 0H25.9533V29.6609H0z"
              />
            </ClipPath>
          </Defs>
        </Svg>
      );
    case 'angle_right':
      return (
        <Svg width={width} height={height} viewBox="0 0 20 31" fill="none">
          <Path
            d="M17.065 16.64L5.806 27.9a1.39 1.39 0 01-1.966 0l-1.313-1.313a1.39 1.39 0 01-.003-1.964l8.923-8.965-8.923-8.964a1.39 1.39 0 01.003-1.964L3.84 3.416a1.39 1.39 0 011.966 0l11.259 11.258a1.39 1.39 0 010 1.966z"
            fill="#000"
          />
        </Svg>
      );
    case 'clear':
      return (
        <Svg width={width} height={height} viewBox="0 0 32 32">
          <Path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z" />
        </Svg>
      );
    case 'check':
      return (
        <Svg width={width} height={height} viewBox="0 0 31 31" fill="none">
          <G clipPath="url(#clip0_201_5645)">
            <Path
              d="M10.709 25.943l-9.64-9.64a1.483 1.483 0 010-2.097l2.097-2.098c.58-.579 1.518-.579 2.097 0l6.494 6.494 13.91-13.909c.578-.58 1.517-.58 2.097 0L29.86 6.79c.579.58.579 1.519 0 2.098L12.806 25.943c-.58.579-1.518.579-2.097 0z"
              fill="#000"
            />
          </G>
          <Defs>
            <ClipPath id="clip0_201_5645">
              <Path
                fill="#fff"
                transform="translate(.634 .488)"
                d="M0 0H29.6609V29.6609H0z"
              />
            </ClipPath>
          </Defs>
        </Svg>
      );
    default:
      return null;
  }
};

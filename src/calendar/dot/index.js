import React from 'react';
import {View} from 'react-native';
import styleConstructor from './style';
import PropTypes from 'prop-types';

const Dot = ({theme, isMarked, isDisabled, selectedDotColor, dotColor, isToday, isSelected}) => {

  const style = styleConstructor(theme);
  const dotStyle = [style.dot];

  if (isMarked) {
    dotStyle.push(style.visibleDot);

    if (isDisabled) {
      dotStyle.push(style.disabledDot);
    }

    if (dotColor) {
      dotStyle.push({backgroundColor: dotColor});
    }

    if (isToday) {
      dotStyle.push(style.todayDot);
    }

    if (isSelected) {// edit on 06/08/2020
      if(selectedDotColor){
        dotStyle.push({backgroundColor: selectedDotColor});
      }else{
        dotStyle.push(style.selectedDot);
      }
    }

  }
  
  return (
    <View style={dotStyle}/>
  );
};

export default Dot;

Dot.propTypes = {
  theme: PropTypes.object,
  isMarked: PropTypes.bool,
  dotColor: PropTypes.string,
  selectedDotColor: PropTypes.string,//add on 06/08/2020
  isSelected: PropTypes.bool,
  isToday: PropTypes.bool,
  isDisabled: PropTypes.bool
};
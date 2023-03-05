import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"

class StreamlitDatalist extends StreamlitComponentBase {
  public state = { selection: null, isFocused: false , value: ''}

  public render = (): ReactNode => {
    const { options, label, def_val, widget_disabled} = this.props.args
    
    var i = 0
    const options_html = []
    for (let option of options){
      options_html.push(<option value={option} id={option} key={i}/>);
      i+=1;
    }
    
    const { theme } = this.props
    const styleLabel: React.CSSProperties = {}
    const styleInput: React.CSSProperties = {}

    styleLabel.width = '100%'
    styleLabel.fontSize = '14px'
    styleLabel.lineHeight = '1.6'
    styleLabel.transform = 'scale(1,0.95)'
    styleLabel.fontFamily = theme?.font
    styleLabel.marginBottom = '0.5rem'
    styleLabel.height = 'auto'
    styleLabel.minHeight = '1.5rem'
    styleLabel.verticalAlign = 'middle'

    styleInput.width = '100%'
    styleInput.backgroundColor = theme?.secondaryBackgroundColor
    styleInput.color = theme?.textColor
    styleInput.padding = "8px"
    styleInput.lineHeight = '1.4'
    styleInput.borderRadius = "0.25rem"
    styleInput.fontSize = '16px'
    styleInput.border = "1px solid"
    styleInput.borderColor = "rgb(0,0,0,0)"
    styleInput.textIndent = "2px"
    styleInput.fontWeight = "normal"

    if (this.state.isFocused) {
      styleInput.borderColor = theme?.primaryColor
      styleInput.outline = '0px'
    }

    if (widget_disabled===true){
      styleInput.color = "rgba(120,120,120,0.65)"
      styleLabel.color = "rgba(120,120,120,0.65)"
    }

    return (
      <span>
        <label style = {styleLabel}> {label} <br/> </label>
        <input style = {styleInput}
              list="datalist-datalist" 
              name="datalist" 
              id="datalist" 
              defaultValue = {def_val}
              // onChange = {this._updateInputValue}
              onKeyDown = {this._handleKeyPress}
              onFocus={this._onFocus}
              onBlur={this._onBlur}
              key = {def_val}
              disabled = {widget_disabled}
              autoComplete = 'off'

              />
        
        <datalist id="datalist-datalist" className='rowWid'>
          {options_html}
        </datalist>
      </span>
    )
  }

  private _updateInputValue(event:any) {
    if (event.target.value===''){
      Streamlit.setComponentValue([null])
    }else{
      Streamlit.setComponentValue([event.target.value])
    }
  }


  private _handleKeyPress = (event:any) => {
    if(event.key === 'Enter'){
      if (event.target.value===''){
        Streamlit.setComponentValue([null])
      }else{
        Streamlit.setComponentValue([event.target.value])
      }
    }
  }

  private _onFocus = (): void => {
    this.setState({ isFocused: true })
  }

  private _onBlur = (event:any): void => {
    this.setState({ isFocused: false })
    if (event.target.value===''){
      Streamlit.setComponentValue([null])
    }else{
      Streamlit.setComponentValue([event.target.value])
    }
  }

}


export default withStreamlitConnection(StreamlitDatalist)

import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"

class StreamlitDatalist extends StreamlitComponentBase {
  public state = { selection: null, isFocused: false }

  public render = (): ReactNode => {
    const options = this.props.args["options"]
    const label = this.props.args["label"]
    const options_html = []

    for (let option of options){
      options_html.push(<option value={option}/>);
    }

    const { theme } = this.props
    const styleLabel: React.CSSProperties = {}
    const styleInput: React.CSSProperties = {}

    // Maintain compatibility with older versions of Streamlit that don't send
    // a theme object.
    // if (theme) {
    //   const borderStyling = `0px solid ${
    //     this.state.isFocused ? theme.primaryColor : "gray"
    //   }`
    //   style.border = borderStyling
    //   style.outline = borderStyling
    // }

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

    // if (theme?.base === 'light') {
    //   styleInput.color = "rgb(49, 51, 63)"
    // }

    if (this.state.isFocused) {
      styleInput.borderColor = theme?.primaryColor
      styleInput.outline = '0px'
    }

    return (
      <span>
        <label style = {styleLabel}> {label} <br/> </label>
        <input style = {styleInput}
              list="datalist-datalist" 
              name="datalist" 
              id="datalist" 
              onChange={evt => this.updateInputValue(evt)}
              onFocus={this._onFocus}
              onBlur={this._onBlur}
              />
        
        <datalist id="datalist-datalist" className='rowWid'>
          {options_html}
        </datalist>

      </span>
    )
  }

  private updateInputValue(evt:any) {
    const val = evt.target.value;
    // this.setState({ selection: val })
    Streamlit.setComponentValue(val) 
  }

  /** Focus handler for our "Click Me!" button. */
  private _onFocus = (): void => {
    this.setState({ isFocused: true })
  }

  /** Blur handler for our "Click Me!" button. */
  private _onBlur = (): void => {
    this.setState({ isFocused: false })
  }

}

export default withStreamlitConnection(StreamlitDatalist)

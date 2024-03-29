<h2> Streamlit Datalist </h2>

This component brings datalists to Streamlit. Contrary to regular selectboxes, where the user is contrained to the options in the dropdown list, datalists can receive values that weren't available.

To install this component, run the following command:

        pip install streamlit-datalist

Importing and using the package can be done as follows:
  
        from streamlit_datalist import stDatalist
        
        my_selection = stDatalist("This datalist is...", ["great", "cool", "neat"])

<br><br>
<img src="https://user-images.githubusercontent.com/108201791/200101163-b91ed217-d60a-4695-a5e1-a198cf2c857c.gif" style="width:50em">

<br>

The component takes the following parameters:
- <b>label</b>: <i>string</i><br>
A name to display on top of the component.

- <b>options</b>: <i>list</i><br>
List of options to display in the dropdown.

- <b>index</b>: <i>int</i> (optional, default <i>None</i>)<br>
Index of the list element to be displayed as a default value. Defaults to <i>None</i>.

- <b>key</b>: <i>int, str</i> (optional, default <i>None</i>)<br>
Component's key. Required when multiple datalists will be used in the Streamlit app. 

- <b>disabled</b>: <i>bool</i> (optional, default <i>False</i>)<br>
Use this attribute to enable/disable the widget. 

<br>

<h3>v0.0.5</h3>
Changes:
<li>Fixing README and version of package.

<h3>v0.0.4a0</h3>
Changes:
<li>Adding <i>disabled</i> attribute, to set the state of the widget.
<li>Changed the way the widget updates. Now value will only update when clicking away of the widget, or by hitting the Enter key.

<h3>v0.0.3</h3>
Changes:
<li>Fix: Default value now refreshes when input data changes.

<h3>v0.0.2</h3>
Changes:
<li>Added <i>index</i> parameter, to specify a default selection from the options list.
<li>Deleting value from component will return a <i>None</i> value instead of <i>blank</i>.

<h3>v0.0.1</h3>
Initial release of the component








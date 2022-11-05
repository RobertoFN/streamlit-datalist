<h2> Streamlit Datalist </h2>

This component brings datalists to Streamlit. Contrary to regular selectboxes, where the user is contrained to the options in the dropdown list, datalists can receive values that weren't available.

To install this component, run the following command:

        pip install streamlit-datalist

Importing and using the package can be done as follows:
  
        from streamlit-datalist import stDatalist
        
        my_selection = stDatalist("This datalist is...", ["great", "cool", "neat"])

<br><br>
<img src="https://user-images.githubusercontent.com/108201791/200101163-b91ed217-d60a-4695-a5e1-a198cf2c857c.gif" style="width:50em">

<br>

The component takes a label (str) and a list of options, as well as a key.


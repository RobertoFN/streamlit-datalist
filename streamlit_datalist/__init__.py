import streamlit.components.v1 as components
import streamlit as st
import os
import pandas as pd

_RELEASE = False

if _RELEASE:
    root_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(root_dir, 'frontend/build')

    _streamlit_datalist = components.declare_component(
        "stDatalist",
        path=build_dir
    )

else:
    _streamlit_datalist = components.declare_component(
        "stDatalist",
        url="http://localhost:3001"
    )


def stDatalist(label:str, options:list, index:int=None, key=None, disabled:bool=False):
    def_val = options[index] if index!=None else None
    react_val = def_val
    return_vals = _streamlit_datalist(label=label, options=options, def_val=def_val, key=key, widget_disabled=disabled)

    if return_vals: react_val = return_vals[0]

    return react_val



## Code used during testing and development.
if not _RELEASE:
    
    data = {'data':[12345, 67890, 98765]}
    my_df = pd.DataFrame(data=data)

    # data = my_df['data'].tolist()
    col1,col2 = st.columns(2)
    data = col1.radio('Select list', [["great", "cool", "neat"], ["ABC", "DEF", "GHI"], [123,456,789]])
    col2.write(data)
    u_ind = 1
    st.write(u_ind)

    cont1 = st.container()
    st.markdown('<hr style="border:0px; background-color:orange; height:2px;">', unsafe_allow_html=True)

    def_sel = 'Default_value'

    dis_but = st.checkbox('Disable datalist',value=False)
    my_sel1 = stDatalist('This datalist is...', options=data, index=u_ind, key='data', disabled=dis_but)

    st.selectbox('Native element', data, index=u_ind, key='hi', disabled=True)

    with cont1:
        st.write('The value you selected is: ', my_sel1)
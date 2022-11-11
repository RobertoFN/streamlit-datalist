import streamlit.components.v1 as components
import streamlit as st
import os
import pandas as pd

_RELEASE = True

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


def stDatalist(label:str, options:list, index:int=None, key=None):
    def_val = options[index] if index!=None else None
    react_val = def_val

    return_vals = _streamlit_datalist(label=label, options=options, def_val=def_val, key=key)

    if return_vals: react_val = return_vals[0]

    return react_val



## Code used during testing and development.
if not _RELEASE:
    
    data = {'data':[12345, 67890, 98765]}
    my_df = pd.DataFrame(data=data)

    # data = my_df['data'].tolist()
    data=["great", "cool", "neat"]
    u_ind = 1

    st.write(data)
    st.write(u_ind)

    cont1 = st.container()
    st.markdown('<hr style="border:0px; background-color:orange; height:2px;">', unsafe_allow_html=True)

    def_sel = 'Default_value'

    my_sel1 = stDatalist('This datalist is...', options=data, index=u_ind, key='data')

    with cont1:
        st.write('The value you selected is: ', my_sel1)
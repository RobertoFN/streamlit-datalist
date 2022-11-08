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


def stDatalist(label:str, options:list, index:int=0, key=None):
    return _streamlit_datalist(label=label, options=options, index=index, key=key, default=None)


## Code used during testing and development.
if not _RELEASE:
    
    data = {'data':[12345, 67890, 98765]}

    my_df = pd.DataFrame(data=data)

    data=["great", "cool", "neat"]

    cont1 = st.container()
    st.markdown('<hr style="border:0px; background-color:orange; height:2px;">', unsafe_allow_html=True)

    my_sel = stDatalist('This datalist is...', data, key='1')
    # my_sel = stDatalist('This datalist is...', my_df['data'].tolist(), key='1')

    with cont1:
        st.write('The value you selected is: ', my_sel)
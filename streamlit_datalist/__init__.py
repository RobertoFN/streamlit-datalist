import streamlit.components.v1 as components
import streamlit as st
import os

_RELEASE = True

if _RELEASE:
    root_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(root_dir, 'frontend/build')

    _streamlit_datalist = components.declare_component(
        "streamlit_datalist",
        path=build_dir
    )
else:
    _streamlit_datalist = components.declare_component(
        "streamlit_datalist",
        url="http://localhost:3001"
    )



def streamlit_datalist(label:str, options:list, index:int=0, key=None):
    return _streamlit_datalist(label=label, options=options, index=index, key=key, default=None)


if not _RELEASE:
    options=['123','456','789','1012']
    col1,col2 = st.columns(2)
    with col1:
        my_sel = streamlit_datalist('My dropdown', options, key='1')

    col2.selectbox('Native dropdown', ['Option 1','Option 2','Option 3'])

    st.write(my_sel)

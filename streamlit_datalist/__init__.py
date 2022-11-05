import streamlit.components.v1 as components
import streamlit as st
import os

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


if  _RELEASE:
    
    
    my_sel = stDatalist('This datalist is...', ["great", "cool", "neat"], key='1')

    st.write('')
    st.write('')
    st.write('')
    st.write('')
    st.write('')
    st.write('The value you selected is: ', my_sel)
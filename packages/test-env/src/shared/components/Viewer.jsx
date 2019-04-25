import React from 'react';
import { RichContentViewer } from 'wix-rich-content-viewer';
import 'wix-rich-content-common/dist/styles.min.css';
import 'wix-rich-content-editor/dist/styles.min.css';
import 'wix-rich-content-viewer/dist/styles.min.css';

const Viewer = props => <RichContentViewer {...props}/>;

export default Viewer;
import React from 'react';
import 'ids-enterprise-wc/components/ids-masthead/ids-masthead';

const IdsMasthead = () => {
  return (
    <>
      <ids-layout-grid auto-fit="true" padding="md">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Masthead
          </ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid auto-fit="true" id="ids-masthead-list" col="1">
        <ids-layout-grid-cell>
          <ids-masthead title="Infor Application" icon="logo" role="navigation">
            <section title="start" slot="start">
              <ids-button icon="grid">
                <span className="audible">
                  Grid Button
                </span>
              </ids-button>
            </section>
            <section title="center" slot="center">
              <ids-button icon="home">
                <span>Home</span>
              </ids-button>
              <ids-button icon="star-outlined">
                <span>Star</span>
              </ids-button>
              <ids-button icon="info">
                <span>Info</span>
              </ids-button>
            </section>
            <section title="end" slot="end">
              <ids-button icon="user">
                <span className="audible">
                  User Button
                </span>
              </ids-button>
              <ids-button icon="mingle-share">
                <span className="audible">
                  Mingle Button
                </span>
              </ids-button>
              <ids-button icon="bookmark-outlined">
                <span className="audible">
                  Bookmark Button
                </span>
              </ids-button>
            </section>
          </ids-masthead>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsMasthead;

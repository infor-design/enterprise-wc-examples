import React, { useRef } from 'react';
import type IdsAppMenuType from 'ids-enterprise-wc/components/ids-app-menu/ids-app-menu';
import 'ids-enterprise-wc/components/ids-app-menu/ids-app-menu';
import 'ids-enterprise-wc/components/ids-header/ids-header';
import avatar from '../../assets/images/avatar-placeholder.jpg';

const IdsAppMenu = () => {
  const appMenuRef = useRef<IdsAppMenuType>();

  return (
    <>
      <ids-header>
        <ids-toolbar>
          <ids-toolbar-section type="button">
            <ids-button icon="menu" onClick={() => {
              if (appMenuRef.current) {
                appMenuRef.current.visible = !appMenuRef.current.visible;
              }
            }}>
              <span className="audible">
                Open App Menu
              </span>
            </ids-button>
          </ids-toolbar-section>
          <ids-toolbar-section type="title">
            <ids-text font-size="20" type="h1">
              App Menu Example
            </ids-text>
          </ids-toolbar-section>
          <ids-toolbar-section align="end" type="button">
            <ids-theme-switcher mode="light"></ids-theme-switcher>
          </ids-toolbar-section>
        </ids-toolbar>
      </ids-header>

      <ids-app-menu ref={appMenuRef}>
        <img src={avatar} slot="avatar" id="avatar" alt="Richard Fairbanks" />
        <ids-text slot="username" font-size="24" font-weight="bold">
          Richard Fairbanks
        </ids-text>

        <ids-toolbar slot="header">
          <ids-toolbar-section align="center-even" type="buttonset">
            <ids-button id="header-btn-download" icon="download">
              <ids-text audible>
                Download
              </ids-text>
            </ids-button>
            <ids-button id="header-btn-print" icon="print">
              <ids-text audible>
                Print
              </ids-text>
            </ids-button>
            <ids-button id="header-btn-purchasing" icon="purchasing">
              <ids-text audible>
                Purchasing
              </ids-text>
            </ids-button>
            <ids-button id="header-btn-notification" icon="notification">
              <ids-text audible>
                Notification
              </ids-text>
            </ids-button>
            <ids-button id="header-btn-inventory" icon="inventory">
              <ids-text audible>
                Inventory
              </ids-text>
            </ids-button>
          </ids-toolbar-section>
        </ids-toolbar>

        <ids-search-field
          id="search"
          clearable
          color-variant="app-menu"
          label="Application Menu Search"
          label-state="collapsed"
          no-margins
          slot="search"
        ></ids-search-field>

        <ids-accordion>
          <ids-accordion-panel>
            <ids-accordion-header slot="header" icon="user">
              <ids-text font-size="16">Employee</ids-text>
            </ids-accordion-header>
            <ids-accordion-panel slot="content">
              <ids-accordion-header slot="header">
                <ids-text font-size="14">My Profile</ids-text>
              </ids-accordion-header>
            </ids-accordion-panel>
            <ids-accordion-panel slot="content">
              <ids-accordion-header slot="header">
                <ids-text font-size="14">Talent Profile</ids-text>
              </ids-accordion-header>
            </ids-accordion-panel>
            <ids-accordion-panel slot="content">
              <ids-accordion-header slot="header">
                <ids-text font-size="14">View Compensation</ids-text>
              </ids-accordion-header>
            </ids-accordion-panel>
            <ids-accordion-panel slot="content">
              <ids-accordion-header slot="header">
                <ids-text font-size="14">RAVE</ids-text>
              </ids-accordion-header>
            </ids-accordion-panel>
            <ids-accordion-panel slot="content">
              <ids-accordion-header slot="header">
                <ids-text font-size="14">Request Time Off</ids-text>
              </ids-accordion-header>
            </ids-accordion-panel>
            <ids-accordion-panel slot="content">
              <ids-accordion-header slot="header">
                <ids-text font-size="14">Benefits</ids-text>
              </ids-accordion-header>
              <ids-accordion-panel slot="content">
                <ids-accordion-header slot="header">
                  <ids-text font-size="14">My Benefits</ids-text>
                </ids-accordion-header>
              </ids-accordion-panel>
              <ids-accordion-panel slot="content">
                <ids-accordion-header slot="header">
                  <ids-text font-size="14">
                    Dependents and Beneficiaries
                  </ids-text>
                </ids-accordion-header>
              </ids-accordion-panel>
              <ids-accordion-panel slot="content">
                <ids-accordion-header slot="header">
                  <ids-text font-size="14">Life Events</ids-text>
                </ids-accordion-header>
              </ids-accordion-panel>
              <ids-accordion-panel slot="content">
                <ids-accordion-header slot="header">
                  <ids-text font-size="14">Benefits Information</ids-text>
                </ids-accordion-header>
              </ids-accordion-panel>
            </ids-accordion-panel>
            <ids-accordion-panel slot="content">
              <ids-accordion-header slot="header">
                <ids-text font-size="14">My Rewards</ids-text>
              </ids-accordion-header>
            </ids-accordion-panel>
            <ids-accordion-panel slot="content">
              <ids-accordion-header slot="header">
                <ids-text font-size="14">Find a Coworker</ids-text>
              </ids-accordion-header>
            </ids-accordion-panel>
            <ids-accordion-panel slot="content">
              <ids-accordion-header slot="header">
                <ids-text font-size="14">My Growth</ids-text>
              </ids-accordion-header>
            </ids-accordion-panel>
          </ids-accordion-panel>
          <ids-accordion-panel>
            <ids-accordion-header slot="header" icon="distribution">
              <ids-text font-size="16">Manager</ids-text>
            </ids-accordion-header>
          </ids-accordion-panel>
          <ids-accordion-panel>
            <ids-accordion-header slot="header" icon="roles">
              <ids-text font-size="16">Recruiter</ids-text>
            </ids-accordion-header>
          </ids-accordion-panel>
        </ids-accordion>
      </ids-app-menu>
    </>
  );
};

export default IdsAppMenu;

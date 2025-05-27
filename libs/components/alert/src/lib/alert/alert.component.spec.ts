import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertComponent } from './alert.component';
import { ComponentRef } from '@angular/core';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let componentRef: ComponentRef<AlertComponent>
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;

    componentRef = fixture.componentRef
    componentRef.setInput('title', 'title')

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit buttonClicked when onButtonClicked is called', () => {
    jest.spyOn(component.buttonClicked, 'emit');
    component.onButtonClicked();
    expect(component.buttonClicked.emit).toHaveBeenCalled();
  });

  it('should emit closeAlert when onCloseClick is called', () => {
    jest.spyOn(component.closeAlert, 'emit');
    component.onCloseClick();
    expect(component.closeAlert.emit).toHaveBeenCalled();
  });

  it('should emit closeAlert and prevent default when Enter key is pressed in onCloseKeydown', () => {
    jest.spyOn(component.closeAlert, 'emit');
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    jest.spyOn(event, 'preventDefault');

    component.onCloseKeydown(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(component.closeAlert.emit).toHaveBeenCalled();
  });

  it('should emit closeAlert and prevent default when Space key is pressed in onCloseKeydown', () => {
    jest.spyOn(component.closeAlert, 'emit');
    const event = new KeyboardEvent('keydown', { key: ' ' });
    jest.spyOn(event, 'preventDefault');

    component.onCloseKeydown(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(component.closeAlert.emit).toHaveBeenCalled();
  });

  it('should not emit closeAlert or prevent default when other key is pressed in onCloseKeydown', () => {
    jest.spyOn(component.closeAlert, 'emit');
    const event = new KeyboardEvent('keydown', { key: 'a' });
    jest.spyOn(event, 'preventDefault');

    component.onCloseKeydown(event);

    expect(event.preventDefault).not.toHaveBeenCalled();
    expect(component.closeAlert.emit).not.toHaveBeenCalled();
  });
});

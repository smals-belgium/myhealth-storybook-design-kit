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
});
